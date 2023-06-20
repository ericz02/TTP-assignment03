function lengthOfLongestSubstring(s) {
    let n = s.length;
    let maxLen = 0;
    let start = 0;
    let charMap = {};

    for (let end = 0; end < n; end++) {
        if (s[end] in charMap) {
            // If the current character is already in the map,
            // update the start pointer to the next position of the
            // previous occurrence of the character.
            start = Math.max(start, charMap[s[end]] + 1);
        }

        // Update the map with the current character and its index.
        charMap[s[end]] = end;

        // Update the maximum length of the substring if necessary.
        maxLen = Math.max(maxLen, end - start + 1);
    }

    return maxLen;
}


module.exports = lengthOfLongestSubstring;