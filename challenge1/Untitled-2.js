// Program to assign grades using readline (for Node.js)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter student marks (0 - 100): ", function (input) {
  let marks = Number(input);

  if (marks < 0 || marks > 100 || isNaN(marks)) {
    console.log("Invalid input! Marks must be between 0 and 100.");
  } else if (marks > 79) {
    console.log("Grade: A");
  } else if (marks >= 60) {
    console.log("Grade: B");
  } else if (marks >= 49) {
    console.log("Grade: C");
  } else if (marks >= 40) {
    console.log("Grade: D");
  } else {
    console.log("Grade: E");
  }

  rl.close();
});
