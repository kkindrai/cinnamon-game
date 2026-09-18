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

    word = generateWord();
    synonymCheck(word);

    // while (!hasSynonyms) {
    //     word = generateWord();
    //     results = synonymCheck(word);
    // }
    
    
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
    // DEV
    word = 'chingar';
    let url = 'https://freedictionaryapi.com/api/v1/entries/es/' + word;
    let results;
    let synDataLocation01;
    let synDataLocation02;
    let synDataLocation03;

    let synonymLib = [];

    results = requestData(url);

    console.log(`[synonymCheck] url = ${url}`);

    console.log(`[synonymCheck] results = ${results}`);

    // So... there's a lot of weird places it saves synonyms for some reason, and I hate it.
    
    // Synonym Data Locations
    synDataLocation01 = JSON.parse(results);

    // THIS ONE WORKS
    synDataLocation01 = synDataLocation01.entries[0].senses;

    console.log(`[synonymCheck] devAbove = ${synDataLocation01}`);

    if (synDataLocation01) {
        synDataLocation01.forEach(entry => {
            console.log(`[synonymCheck] entry.synonyms = ${entry.synonyms}`);
        });
    }

    return results;
}

/**
 * synonymCheck - END
 * ────୨୧────────୨୧────────୨୧────
*/


window.onload = controller;