/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var subStr = '';
    var longestSubStrLength = 0;
    var j = 0;
    var i = 0;
    while(i < s.length){
        var character = s.charAt(i);
        if(subStr.indexOf(character) >= 0){
            j++;
        }else{
            i++;
        }
        subStr = s.substring(j, i);
        longestSubStrLength = subStr.length > longestSubStrLength ? subStr.length : longestSubStrLength;
    }
    return longestSubStrLength;
};