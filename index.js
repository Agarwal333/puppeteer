const puppeteer = require("puppeteer");

(async ()=>{
    const browser = await puppeteer.launch({
        defaultViewport:{
            width: 480,
            height: 900,
        },
    });
    const page = await browser.newPage();
    await page.goto("https://google.com");
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    await page.screenshot({ path: `image${date}.png`});

    await browser.close();
})();


// Code for google search

// (async()=> {
//     const browser = await puppeteer.launch({headless: false});
//     const page = await browser.newPage();
//     await page.goto('https://google.com');
//     await page.type(".gLFyf", "test");
//     await page.keyboard.press("Enter");
//     await page.waitForNavigation();
//     await page.click(".tF2Cxc");
//     await browser.close();
// })();