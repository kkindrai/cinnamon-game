/** 
 * @author kkindrai
 * @implements 
 *  https://random-word-api.herokuapp.com/home
 *  https://www.mediawiki.org/wiki/API:Tutorial#How_to_use_it
 *  https://github.com/Rob--W/cors-anywhere
 * 
*/


/**
 * ────୨୧────────୨୧────────୨୧────
 * Controller - START
*/

function controller() {
    let word;
    let hasSynonyms = false;

    // while (!hasSynonyms) {
    //     word = generateWord();
    //     results = synonymCheck(word);

    //     console.log(`[controller] results = ${results}`);

    //     // end loop
    //     if(results.length !== 0) {
    //         hasSynonyms = true;
    //     }
    // }
    

    //dev
    word = generateWord();
    results = synonymCheck(word);
    
}

/**
 * Controller - END
 * ────୨୧────────୨୧────────୨୧────
*/

/**
 * ────୨୧────────୨୧────────୨୧────
 * generateWord - START
 * 
 * Pulls a word from the random-word-api
*/

function generateWord() {
    // Declare local variables
    let url = 'https://random-word-api.herokuapp.com/word?lang=es';
    let word;
    
    // Obtain word from API
    word = JSON.parse(requestData(url))[0];

    console.log(`[generateWord] word = ${word}`);

    return word;
}

/**
 * generateWord - END
 * ────୨୧────────୨୧────────୨୧────
*/

/**
 * ────୨୧────────୨୧────────୨୧────
 * synonymCheck - START
*/

function synonymCheck(word) {
    //DEV
    word = "fuego";
    
    // Declare local variables
    let corsBypassURL = "https://cors-anywhere.herokuapp.com/";
    let searchURL = `https://es.wiktionary.org/w/api.php?action=parse&page=${word}&prop=wikitext&format=json`;
    let fullURL = corsBypassURL + searchURL;
    let pageData = requestData(fullURL);
    let rawMatch;
    let synonymLib = [];
    let synonymRegex = /{{sin\\u00f3nimo(s)?\|(\w*(\|)?(\=)?(\,)?(\s)?(\\\s*)?)+}}/g;

    rawMatch = pageData.match(synonymRegex);

    //scrapeWeb(url);
    console.log(rawMatch);

    rawMatch.forEach(item => {
        console.log(convertEspUni(item));
    });

    

    console.log(`[synonymCheck] synonymLib = ${synonymLib}`);
    return synonymLib;
}

/**
 * synonymCheck - END
 * ────୨୧────────୨୧────────୨୧────
*/


window.onload = controller;