/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    var mappings = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    var responses = {};
    for(var i = 0; i < words.length; i++){
        var morseCode = '';
        for(var j = 0; j < words[i].length; j++){
            var charCode = words[i].charCodeAt(j) - 97;
            if(charCode >= 0) {
                morseCode += mappings[charCode];
            }
        }
        if(responses.hasOwnProperty(morseCode)){
            responses[morseCode] ++;
        } else {
            responses[morseCode] = 1;
        }
    }
    return Object.keys(responses).length;
};
