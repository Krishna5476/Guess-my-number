let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);
  console.log(guessNumber);
  if (!guessNumber)
    document.querySelector(".message").textContent = "No number";
  else if (guessNumber === number) {
    document.querySelector(".message").textContent = "You won...";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = number;
    document.querySelector(".highscore").textContent = score;
  } else if (guessNumber > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high";
      score--;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector("body").style.backgroundColor = "red";
    }

    document.querySelector(".score").textContent = score;
  } else if (guessNumber < number) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector("body").style.backgroundColor = "red";
    }
    document.querySelector(".message").textContent = "Too Low";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "grey";
});
