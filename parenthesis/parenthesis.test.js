const balanced = require("./parenthesis");

test("isBalanced is a function", () => {
  expect(typeof balanced).toEqual("function");
});

test("Test {[()]} if it's balanced -> YES", () => {
  expect(balanced("{[()]} ")).toEqual("YES");
});
