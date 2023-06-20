function reverseString(str) {
    return str.split("").reverse().join("");
}

function isPalindrome(str) {
    // takes a string str and returns true if it is a palindrome, and false otherwise
    if (str === reverseString(str)) {
        return true;
    } else {
        return false;
    }
    
}

module.exports = { reverseString, isPalindrome };