 /** ────୨୧────────୨୧────
 * requestData Function - START
*/
function requestData(requestURL) {
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",requestURL,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}
/**
 * Request Function - END
 * ────୨୧────────୨୧────
*/

 /** ────୨୧────────୨୧────
 * scrapeWeb Function - START
*/
// import puppeteer from 'puppeteer';

// async function scrapeWeb(url) {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto(url);

//     // scrape for desired xpath
//     const [element] = await page.$x('//*[@id="main-container-video"]/div[6]/div[1]');
//     //const src = await element.getProperty('src');
//     //const imageSrc = await src.jsonValue();

//     console.log(element);

// }
/**
 * scrapeWeb Function - END
 * ────୨୧────────୨୧────
*/