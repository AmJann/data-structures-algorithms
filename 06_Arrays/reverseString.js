let string = "Hi my name is Amber";
// * stands for I came up with those solutions

//solution 1*
function reverse(str) {
  return str.split("").reverse().join("");
}
//solution2
const reverse2 = (str) => str.split("").reverse().join("");

//solution 3
const reverse3 = (str) => [...str].reverse().join("");

//solution 4*
function reverse4(str) {
  let stringArr = str.split("");
  let reverseArr = [];
  for (let i = 0; i < stringArr.length; i++) {
    reverseArr[i] = stringArr[stringArr.length - 1 - i];
  }
  return reverseArr.join("");
}

//solution 5 ( didn't come up on my own but remade it from memory
// after watching the video except for check input)
function reverse5(str) {
  //check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that is not good";
  }
  let backwards = [];
  let length = str.length - 1;
  for (let i = length; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
}

console.log(reverse5(string));
