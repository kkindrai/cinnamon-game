/**
 * Spanish Character Unicode Conversion
 * @author kkindrai
 * 
 * @description converts all unicode characters to their spanish 
 *      plaintext equiv. 
 * 
 * https://www.geocities.ws/click2speak/unicode/chars_es.html
 */

// Global Variables
const characterMap = [
    {
        char: "Á",
        uni: /\\u00c1/g
    },
    {
        char: "É",
        uni: /\\u00c9/g
    },
    {
        char: "Í",
        uni: /\\u00cd/g
    },
    {
        char: "Ó",
        uni:/"\\u00d3/g
    },
    {
        char: "Ú",
        uni:/"\\u00da/g
    },
    {
        char: "Ü",
        uni: /\\u00dc/g
    },
    {
        char: "Ñ",
        uni: /\\u00d1/g
    },
    {
        char: "á",
        uni: /\\u00e1/g
    },
    {
        char: "é",
        uni: /\\u00e9/g
    },
    {
        char: "í",
        uni: /\\u00ed/g
    },
    {
        char: "ó",
        uni: /\\u00f3/g
    },
    {
        char: "ú",
        uni: /\\u00fa/g
    },
    {
        char: "ü",
        uni: /\\u00fc/g
    },
    {
        char: "ñ",
        uni: /\\u00f1/g
    }
];

function convertEspUni(string) {
    // Local Variables
    string = string.toString();

    characterMap.forEach(charSet => {

            string = string.replace(charSet.uni, charSet.char);
    
    });

    return string;
}