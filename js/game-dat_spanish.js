/** 
 * @author kkindrai
 * @implements 
 *  https://freedictionaryapi.com/
 *  https://random-word-api.herokuapp.com/home
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
    // Declare local variables
    let url = `https://www.spanishdict.com/thesaurus/${word}`;

    

    console.log(`[synonymCheck] synonymLib = ${synonymLib}`);
    return synonymLib;
}

/**
 * synonymCheck - END
 * ────୨୧────────୨୧────────୨୧────
*/


window.onload = controller;