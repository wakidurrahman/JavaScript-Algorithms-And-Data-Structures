// What is the Big O of the below function? (Hint, you may want to go line by line)

function funChallenge(input) {
  let a = 10;
  a = 50 + 3;

  for (let i = 0; i < input.length; i++) {
    printHello();
    console.log(a);
    const stranger = true;
    a++; // Number of Operations
  }
  console.log(a);
  return a;
}

function printHello() {
  console.log("Hello World");
}

const inputArray = new Array(100).fill("a");

funChallenge(inputArray);
