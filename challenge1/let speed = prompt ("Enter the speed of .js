let speed = prompt("Enter the speed of the car:");
speed = Number(speed);

if (speed < 70) {
  alert("Ok");
} else {
  let points = Math.floor((speed - 70) / 5);

  if (points > 12) {
    alert("License suspended");
  } else {
    alert("Points: " + points);
  }
}
