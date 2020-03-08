const p = require("./index");

const testCasesTrue = ["kayak", "rotor", "madam"];
const testCasesFalse = ["kayak ", " rotor", "mad.am"];

test("palindrome_1 is a function", () => {
  expect(typeof p.palindrome_1).toEqual("function");
});

describe("test palindrome functions (1,2,3) to True", () => {
  testCasesTrue.forEach(c => {
    test(c + " is a palindrome_1", () => {
      expect(p.palindrome_1(c)).toBeTruthy();
    });
    test(c + " is a palindrome_2", () => {
      expect(p.palindrome_2(c)).toBeTruthy();
    });
    test(c + " is a palindrome_3", () => {
      expect(p.palindrome_3(c)).toBeTruthy();
    });
  });
});

describe("test palindrome functions (1,2,3) to False", () => {
  testCasesFalse.forEach(c =>
    test(c + " is not a palindrome", () => {
      return expect(palindrome_1(c)).toBeFalsy();
    })
  );
});
