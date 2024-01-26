// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct number";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 13;
// document.querySelector(".guess").value = 23;

const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = number;

document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);
  console.log(guessNumber);
  if (!guessNumber)
    document.querySelector(".message").textContent = "No number";
  else if (guessNumber === number) {
    document.querySelector(".message").textContent = "You won...";
  } else if (guessNumber > number) {
    document.querySelector(".message").textContent = "Too high";
  } else if (guessNumber < number) {
    document.querySelector(".message").textContent = "Too Low";
  }
});
