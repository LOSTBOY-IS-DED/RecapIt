"use strict";
// import { Builder, Browser, By, Key, until } from "selenium-webdriver";
// import { Options } from "selenium-webdriver/chrome";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const selenium_webdriver_1 = require("selenium-webdriver");
const chrome_1 = require("selenium-webdriver/chrome");
function OpenMeet() {
    return __awaiter(this, void 0, void 0, function* () {
        const options = new chrome_1.Options({});
        options.addArguments("--disable-blink-features=AutomationControlled");
        options.addArguments("--use-fake-ui-for-media-stream");
        let driver = yield new selenium_webdriver_1.Builder()
            .forBrowser(selenium_webdriver_1.Browser.CHROME)
            .setChromeOptions(options)
            .build();
        try {
            yield driver.get("https://meet.google.com/gyc-sdmn-gfn");
            const popupButton = yield driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.xpath('//span[contains(text(), "Got it")]')), 10000);
            yield popupButton.click();
            const nameInput = yield driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.xpath('//input[@placeholder="Your name"]')), 10000);
            yield nameInput.clear();
            yield nameInput.click();
            yield nameInput.sendKeys("value", "Meeting bot");
            yield driver.sleep(1000);
            const buttonInput = yield driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.xpath('//span[contains(text(), "Ask to join")]')), 10000);
            buttonInput.click();
            yield driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id("123123c12")), 1000000);
        }
        finally {
            yield driver.quit();
        }
    });
}
function Main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield OpenMeet();
        // wait for the meeting link to join
    });
}
Main();
