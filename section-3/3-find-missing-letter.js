const { check, runTest, skipTest } = require("../test-api/index.js");

function findMissingLetter(letters) {
  /*
In this function, you need to find out which letter is missing. But you can't use a reference lookup table (i.e. no array or object with the whole alphabet in it) so you will have think outside the box!

This function needs to take a list and needs to return the letter it is missing.

You will always get a sorted array of consecutive letters, and it will always have exactly one letter missing. The length of the array will always be at least 2. The array will always contain letters in only one case.
  */

  for (let i = 0; i < letters.length - 1; i++) {
    const currentCharCode = letters[i].charCodeAt(0);
    const nextCharCode = letters[i + 1].charCodeAt(0);

    if (nextCharCode !== currentCharCode + 1) {
      return String.fromCharCode(currentCharCode + 1);
    }
  }

  return "";
}

console.log("findMissingLetter()");

runTest("returns an empty string if no letters are missing", function () {
  check(findMissingLetter(["A", "B", "C", "D", "E"])).isEqualTo("");
});

runTest("returns a missing capital letter", function () {
  check(findMissingLetter(["A", "B", "C", "E"])).isEqualTo("D");
});

runTest("returns a missing lower case letter", function () {
  check(findMissingLetter(["e", "f", "g", "i"])).isEqualTo("h");
});
