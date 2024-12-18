// import { Builder, Browser, By, Key, until } from "selenium-webdriver";
// import { Options } from "selenium-webdriver/chrome";

// async function main() {
//   const options = new Options({});
//   options.addArguments("--disable-blink-features=AutomationControlled");
//   options.addArguments("--use-fake-ui-for-media-stream");
//   let driver = await new Builder()
//     .forBrowser(Browser.CHROME)
//     .setChromeOptions(options)
//     .build();

//   try {
//     await driver.get("https://meet.google.com/gyc-sdmn-gfn");
//     await driver.sleep(3000);
//     const nameInput = await driver.wait(
//       until.elementLocated(By.id("c11")),
//       10000
//     );
//     await nameInput.clear();
//     await nameInput.click();
//     await nameInput.sendKeys("naina sweetheart");
//     // await driver.findElement(By.id("c11")).sendKeys("value", "your value");
//     await driver.wait(until.elementLocated(By.id("c11sdfjsl")), 100000000);
//   } finally {
//     await driver.quit();
//   }
// }

// main();

import {
  Builder,
  Browser,
  By,
  Key,
  until,
  WebDriver,
} from "selenium-webdriver";
import { Options } from "selenium-webdriver/chrome";

async function OpenMeet(driver: WebDriver) {
  try {
    await driver.get("https://meet.google.com/gyc-sdmn-gfn");
    const popupButton = await driver.wait(
      until.elementLocated(By.xpath('//span[contains(text(), "Got it")]')),
      10000
    );
    await popupButton.click();
    const nameInput = await driver.wait(
      until.elementLocated(By.xpath('//input[@placeholder="Your name"]')),
      10000
    );
    await nameInput.clear();
    await nameInput.click();
    await nameInput.sendKeys("value", "Meeting bot");
    await driver.sleep(1000);
    const buttonInput = await driver.wait(
      until.elementLocated(By.xpath('//span[contains(text(), "Ask to join")]')),
      10000
    );
    buttonInput.click();
    await driver.wait(until.elementLocated(By.id("123123c12")), 1000000);
  } finally {
    await driver.quit();
  }
}

async function getDriver() {
  const options = new Options({});
  options.addArguments("--disable-blink-features=AutomationControlled");
  options.addArguments("--use-fake-ui-for-media-stream");
  let driver = await new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeOptions(options)
    .build();
  return driver;
}

async function screenShare() {}

async function Main() {
  const driver = await getDriver();
  await OpenMeet(driver);
  // wait for the meeting link to join
  await screenShare(driver);
}

Main();
