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
function scrapeWeb(url) {
    const options = {
        method: 'GET',
        mode: 'no-cors'
        };
    
    fetch(url, options)
        .then(response => {
            // when page is loaded, convert to text
            return response.text();
        })
        .then(html => {
            // initialise DOM parser
            const parser = new DOMParser();

            // parse text
            const doc = parser.parseFromString(html, "text/html");

            console.log(doc);
        })
}
/**
 * scrapeWeb Function - END
 * ────୨୧────────୨୧────
*/

 /** ────୨୧────────୨୧────
 * unicode-escape Functions - START
 * source: https://github.com/sindresorhus/unicode-escapes/blob/main/index.js
*/
const isASCII = character => character.codePointAt(0) <= 127;

const validateString = string => {
	if (typeof string !== 'string') {
		throw new TypeError(`Expected a string, got \`${typeof string}\`.`);
	}
};

function encodeUnicodeEscapes(string) {
	validateString(string);

	return [...string]
		.map(character => isASCII(character) ? character : `\\u{${character.codePointAt(0).toString(16)}}`)
		.join('');
}

function decodeUnicodeEscapes(string) {
	validateString(string);

	return string.replaceAll(/\\u{([\da-f]{1,6})}|\\u([\da-f]{4})/gi, (_, p1, p2) => String.fromCodePoint(Number.parseInt(p1 ?? p2, 16)));
}
/**
 * unicode-escape Function - END
 * ────୨୧────────୨୧────
*/