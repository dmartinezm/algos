const ransome = require("./ransome");

test("does it have it all? no", () => {
  expect(ransome("give me one grand today night", "give me me today")).toEqual(
    "NO"
  );
});

test("does it have it all? Yes", () => {
  expect(ransome("give me one grand today night", "give me today")).toEqual(
    "YES"
  );
});

test("does it have it all? NO", () => {
  expect(
    ransome("two times three is not four", "two times two is four")
  ).toEqual("NO");
});

test("does it have it all? Yes", () => {
  expect(
    ransome("Ive got a lovely Some of Coconuts", "Ive got Some Coconuts")
  ).toEqual("YES");
});

test("does it have it all? NO", () => {
  expect(
    ransome("ive got a lovely Some of Coconuts", "Ive got Some Coconuts")
  ).toEqual("NO");
});
