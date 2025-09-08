// Program to calculate demerit points based on car speed

let speed = 80; // <- change this number to test different speeds

if (speed < 70) {
  console.log("Ok");
} else {
  let points = Math.floor((speed - 70) / 5);

  if (points > 12) {
    console.log("License suspended");
  } else {
    console.log("Points: " + points);
  }
}
