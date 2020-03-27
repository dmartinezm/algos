// Palindrome
// Is a string that is the same in reversed order
// Example: kayak, radar, level, rotor, madam
// Task: create a function that given a string will determine (true/false)
// if it's a palindrome. (include spaces)

function palindrome_1(s) {
  let original = s.toLowerCase();
  let reversed = s
    .toLowerCase()
    .split("")
    .reverse()
    .join("");

  return reversed === original ? true : false;
}

// s = kayak => split = [k,a,y,a,k]
//                      [0,1,2,3,4]
// compare each character in s to the last character of the
// array in reverse order
// a[k,a,y,a,k] ===  b[k,a,y,a,k]
// a(0) === b(b.length - 1) ?

function palindrome_2(s) {
  // const sArray = s.toLowerCase().split("");
  let ans = 0;
  // sArray.forEach((ele, i) => {
  //   return ele === sArray[sArray.length - i - 1] ? 0 : ans++;
  // });
  // return ans === 0 ? true : false;
  for (let i = 0; i < s.length; i++) {
    s[i].toLowerCase() === s[s.length - i - 1].toLowerCase ? 0 : ans++;
  }
  console.log(ans);
}

function palindrome_3(s) {
  const sArray = s.toLowerCase().split("");
  return sArray.every((ele, i) => {
    return ele === sArray[sArray.length - i - 1];
  });
}

// console.log(palindrome_1("kayaK"));
console.log(palindrome_2("Kayak"));
// console.log(palindrome_3("kaYak"));

module.exports = { p1: palindrome_1, p2: palindrome_2, p3: palindrome_3 };
