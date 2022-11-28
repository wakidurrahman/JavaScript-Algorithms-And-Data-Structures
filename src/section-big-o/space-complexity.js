// Space complexity O(1)
function boooo(n) {
  for (let i = 0; i < n; i++) {
    console.log("booooo");
  }
}

boooo(8); // O(1)

// Space complexity O(n)
function arrayOfHiNTimes(n) {
  var hiArray = []; // declare memory
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi"; // assigned value inside  memory
  }
  return hiArray; // Return array
}

arrayOfHiNTimes(6); // O(n) memory use
