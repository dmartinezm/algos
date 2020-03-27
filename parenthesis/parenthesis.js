// Create a function that will return YES/NO
// if the string of parenthesis ()[]{} is balanced
// example : {[()]} -> YES {[(])} -> NO {{[[(())]]}} -> YES

function isBalanced(s) {
  const sp = s.split("");
  let stack = [];

  for (let ele of sp) {
    if (ele === "[" || ele === "(" || ele === "{") {
      stack.push(ele);
      //   console.log("insert to stack " + stack);
    } else {
      if (stack.length !== 0 && isPair(peek(stack), ele)) {
        stack.pop();
        // console.log("removed from stack " + stack);
      } else {
        // this is needed to keep track of right characters that don't match
        stack.push(ele);
      }
    }
  }
  return stack.length === 0 ? "YES" : "NO";

  var result = "YES";
  var stack = [];
  s.split("").forEach(function(val) {
    switch (val) {
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;
      case "(":
        stack.push(")");
        break;
      default:
        var test = stack.pop();
        if (val !== test) {
          result = "NO";
        }
    }
  });
  if (stack.length) {
    result = "NO";
  }
  return result;
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
