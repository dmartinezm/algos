// Create a function that will return YES/NO
// if the string of parenthesis ()[]{} is balanced
// example : {[()]} -> YES {[(])} -> NO {{[[(())]]}} -> YES

function isBalanced(s) {
  const sp = s.split("");
  let stack = [];

  for (let ele of sp) {
    if (ele === "[" || ele === "(" || ele === "{") {
      stack.push(ele);
      console.log("insert to stack " + stack);
    } else {
      if (stack.length !== 0 && isPair(peek(stack), ele)) {
        stack.pop();
        console.log("removed from stack " + stack);
      }
    }
  }
  return stack.length === 0 ? "YES" : "NO";
}

function peek(stack) {
  return stack[stack.length - 1];
}

function isPair(left, right) {
  return (
    (left === "(" && right === ")") ||
    (left === "[" && right === "]") ||
    (left === "{" && right === "}")
  );
}

module.exports = isBalanced;
