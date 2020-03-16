// Create a function that will return YES/NO
// if the string of parenthesis ()[]{} is balanced
// example : {[()]} -> YES {[(])} -> NO {{[[(())]]}} -> YES

function isBalanced(s) {
  return s;
}

function isPair(left, right) {
  return (
    (left === "(" && right === ")") ||
    (left === "[" && right === "]") ||
    (left === "{" && right === "}")
  );
}

module.exports = isBalanced;
