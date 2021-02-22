//Write a function that will take in one argument, a string. 
//Determine if the given string is a palindrome, and return either true or false. 
//(A palindrome is a word that's spelled the same both forward and backward.) 
//For this exercise let's not worry about space characters.

function isPalindrome(str) {
    let normalSplit = str.split('').join('');
    let reverseSplit = str.split('').reverse().join('');

    if (normalSplit === reverseSplit) {
        return true;
    } return false;
}
console.log(isPalindrome('kayak'))