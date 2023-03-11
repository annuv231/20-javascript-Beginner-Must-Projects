let max = parseInt(prompt("Enter the maximum number"));
while (!max) {
  max = parseInt(prompt("Enter the random number"));
}
max = Math.floor(Math.random() * max) + 1;
console.log(max);
let guess = parseInt(prompt("Enter youur guess"));
while (guess != max) {
  if (guess < max) {
    console.log("guess is less");
  }
  if (guess > max) {
    console.log("guess is more");
  }
  guess = parseInt(prompt("guess again "));
}

console.log("Huura yyou got it and the guesss was", guess);
