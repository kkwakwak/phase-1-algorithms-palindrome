function isPalindrome(word) {
  // Write your algorithm here
  const splitString = word.split("");
  const reverseArray = splitString.reverse();
  const joinArray = reverseArray.join("");
  if (word === joinArray) {
    return true
  } else {
    return false
  }
}

// if (word === isPalindrome(word)) {
//   return true
// } else {
//   return false
// }
/* 
  Add your pseudocode here
  reverse the string
    split each words
    use reverse method
    put together the reversed words together
    if the reversed words === original string
    return true
    else false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
