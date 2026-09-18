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
const puppeteer = require('puppeteer');
/**
 * scrapeWeb Function - END
 * ────୨୧────────୨୧────
*/