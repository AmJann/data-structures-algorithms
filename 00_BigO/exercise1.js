//what is the big O notation? Count each line (most people don't count
// assignments or the return statement)

function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    //O(n)
    anotherFunction(); //O(n)
    let stranger = true; //O(n)
    a++; // 0(n)
  }
  return a; // O(1)
}

// answer O(n)
