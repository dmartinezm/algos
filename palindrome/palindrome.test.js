const index = require("./palindrome");

const testCasesTrue = ["kayak", "KAyaK", "rotor", "madam", "10001"];
const testCasesFalse = ["kayak ", " rotor", "mad.am"];

// test("palindrome_1 is a function", () => {
//   expect(typeof index.p1).toEqual("function");
// });
// test("palindrome_2 is a function", () => {
//   expect(typeof index.p2).toEqual("function");
// });
// test("palindrome_3 is a function", () => {
//   expect(typeof index.p3).toEqual("function");
// });

describe("test palindrome function to be True", () => {
  testCasesTrue.forEach(c => {
    test(c + " is a palindrome_1", () => {
      expect(index.p1(c)).toBeTruthy();
    });
    // test(c + " is a palindrome_2", () => {
    //   expect(index.p2(c)).toBeTruthy();
    // });
    // test(c + " is a palindrome_3", () => {
    //   expect(index.p3(c)).toBeTruthy();
    // });
  });
});

describe("test palindrome functions to be False", () => {
  testCasesFalse.forEach(c => {
    test(c + " is not a palindrome", () => {
      expect(index.p1(c)).toBeFalsy();
    });
    // test(c + " is not a palindrome", () => {
    //   expect(index.p3(c)).toBeFalsy();
    // });
    // test(c + " is not a palindrome", () => {
    //   expect(index.p3(c)).toBeFalsy();
    // });
  });
});
