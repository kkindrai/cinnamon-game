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
    let counter = 0;

    while (!hasSynonyms) {
        word = generateWord();
        results = synonymCheck(word);
        counter++;

        // end loop
        if(results || counter > 5) {
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
    let corsBypassURL = "https://cors-anywhere.herokuapp.com/";
    let searchURL = `https://es.wiktionary.org/w/api.php?action=parse&page=${word}&prop=wikitext&format=json`;
    let fullURL = corsBypassURL + searchURL;
    let pageData = requestData(fullURL);
    let rawMatch;
    let synonymLib = [];
    let synonymRegex = /{{sin\\u00f3nimo(s)?\|(\w*(\|)?(\=)?(\,)?(\s)?(\\\s*)?)+}}/g;
    let specRegex = /\|(\w*)/g;

    // Pull out the raw synonym matches
    rawMatch = pageData.match(synonymRegex);

    // Spanish/Unicode Character Conversion
    if(rawMatch){
        rawMatch.forEach(line => {
            let convertedLine = convertEspUni(line);

            // remove additional text
            let extractedSynonyms = convertedLine.match(specRegex);

            // remove | & add to array
            extractedSynonyms.forEach(fragment => {
                let word = fragment.match(/\w*/g);
                
                // Add word to synonymLib array
                synonymLib.push(word[1]);
            });
        });

        console.log(`[synonymCheck] synonymLib = ${synonymLib}`);
        return synonymLib;
    } 
}

/**
 * synonymCheck - END
 * ────୨୧────────୨୧────────୨୧────
*/


window.onload = controller;