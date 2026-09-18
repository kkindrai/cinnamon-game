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

    while (!hasSynonyms) {
        word = generateWord();
        results = synonymCheck(word);

        console.log(`[controller] results = ${results}`);

        // end loop
        if(results.length !== 0) {
            hasSynonyms = true;
        }
    }
    
    
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
    // word = 'chingar';
    let url = 'https://freedictionaryapi.com/api/v1/entries/es/' + word;
    let results;
    let synDataLocation01;
    let synDataLocation02;
    let synDataLocation03;

    let synonymLib = [];

    results = requestData(url);

    console.log(`[synonymCheck] url = ${url}`);

    //console.log(`[synonymCheck] results = ${results}`);

    // So... there's a lot of weird places it saves synonyms for some reason, and I hate it.


    /** 
     * ────୨୧────────୨୧────
     * synDataLocation01 - START
     *  -- entries[0].senses check
    */ 
    synDataLocation01 = JSON.parse(results);
    if(synDataLocation01.entries[0]) {
        synDataLocation01 = synDataLocation01.entries[0].senses;

        synDataLocation01.forEach(entry => {

            // If synonyms have been found
            if(entry.synonyms) {
                // For each synonym found
                entry.synonyms.forEach(syn => {
                    // Add to synonymLib array
                    synonymLib.push(syn);
                });
            }
        });
    }
    /** 
     * synDataLocation01 - END
     * ────୨୧────────୨୧────
    */ 

    /** 
     * ────୨୧────────୨୧────
     * synDataLocation02 - START
     *  -- entries[0].synonyms check
    */ 
    synDataLocation02 = JSON.parse(results);
    if(synDataLocation02.entries[0]) {
        synDataLocation02 = synDataLocation02.entries[0].synonyms;

        // If this location contains data
        if (synDataLocation02) {
            synDataLocation02.forEach(entry => {

                // If synonyms have been found
                if(entry) {
                    // For each synonym found
                    entry.forEach(syn => {
                        // Add to synonymLib array
                        synonymLib.push(syn);
                    });
                }
            });
        }
    }
    
    /** 
     * synDataLocation01 - END
     * ────୨୧────────୨୧────
    */ 

    console.log(`[synonymCheck] synonymLib = ${synonymLib}`);
    return synonymLib;
}

/**
 * synonymCheck - END
 * ────୨୧────────୨୧────────୨୧────
*/


window.onload = controller;