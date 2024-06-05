const { check, runTest, skipTest } = require("../test-api/index.js");

/*
This function marks passwords out of 7 using the scores below.
Invalid inputs should return 0.

Score	Criteria	Example
1 Less than four characters	e.g. bob
2	Less than nine characters	e.g. bobbybob
3	More than eight characters and all letters	e.g. bobbobbob
4	More than eight characters includes a number	e.g. bobbobbob1
5	More than eight characters includes a number and special character	e.g. bobbob1#2$
6	More than twelve characters includes a number	e.g. bobbobbobbob123
7	More than twelve characters includes a number and special character	e.g. bobbobbob1!2@3#

Special characters: ! @ £ # $ % ^ & *
*/
function passwordScore(password) {
  if (typeof password !== 'string') {
    return 0;
  }

  const length = password.length;
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@£#$%^&*]/.test(password);

  if (length < 4) {
    return 1;
  } else if (length < 9) {
    return 2;
  } else if (length >= 9 && length <= 12) {
    if (hasLetter && !hasNumber && !hasSpecialChar) {
      return 3;
    } else if (hasLetter && hasNumber && !hasSpecialChar) {
      return 4;
    } else if (hasLetter && hasNumber && hasSpecialChar) {
      return 5;
    }
  } else if (length > 12) {
    if (hasLetter && hasNumber && !hasSpecialChar) {
      return 6;
    } else if (hasLetter && hasNumber && hasSpecialChar) {
      return 7;
    }
  }

  return 0;
}

console.log("passwordScore()");

runTest("scores 1 for less than four characters", function () {
  check(passwordScore("bob")).isEqualTo(1);
});

runTest("scores 2 for less than nine characters", function () {
  check(passwordScore("bobbybob")).isEqualTo(2);
});

runTest(
  "scores 3 for more than eight characters and all letters",
  function () {
    check(passwordScore("bobbobbob")).isEqualTo(3);
  }
);

runTest(
  "scores 4 for more than eight characters includes a number",
  function () {
    check(passwordScore("bobbobbob1")).isEqualTo(4);
  }
);

runTest(
  "scores 5 for more than eight characters includes a number and special character",
  function () {
    check(passwordScore("bobbob1#2$")).isEqualTo(5);
  }
);

runTest(
  "scores 6 for more than twelve characters includes a number",
  function () {
    check(passwordScore("bobbobbobbob123")).isEqualTo(6);
  }
);

runTest(
  "scores 1 for more than twelve characters includes a number and special character	",
  function () {
    check(passwordScore("bobbobbob1!2@3#")).isEqualTo(7);
  }
);
