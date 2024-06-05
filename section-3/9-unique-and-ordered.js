const { check, runTest, skipTest } = require("../test-api/index.js");

/*
Implement a function which takes as an argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

The function should be able to to work with both strings and arrays, and should return an array.
*/
function uniqueAndOrdered(sequence) {

  if (typeof sequence === 'string') {
    sequence = sequence.split('');
  }

  const result = [];
  let previousElement;

  for (let element of sequence) {
    if (element !== previousElement) {
      result.push(element);
      previousElement = element;
    }
  }

  return result;

}

console.log("uniqueAndOrdered");

runTest("returns unique ordered numbers from an array", function () {
  check(uniqueAndOrdered([1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 1, 1])).isEqualTo([
    1, 2, 3, 1
  ]);
});

runTest("returns unique ordered letters from a string", function () {
  check(uniqueAndOrdered("nnoorrtthhccooddeerrss")).isEqualTo([
    "n",
    "o",
    "r",
    "t",
    "h",
    "c",
    "o",
    "d",
    "e",
    "r",
    "s"
  ]);
});

runTest("is case sensitive for strings", function () {
  check(uniqueAndOrdered("AaAAABBBCCCc")).isEqualTo([
    "A",
    "a",
    "A",
    "B",
    "C",
    "c"
  ]);
});
