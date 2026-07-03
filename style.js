const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const cuteGif = document.getElementById("cuteGif");
const message = document.getElementById("message");
const celebration = document.getElementById("celebration");

const noTexts = [
  "Really?",
  "Are you sure?",
  "Think again...",
  "Please?",
  "I will be sad...",
  "Last chance!",
  "You cannot escape yes now."
];

const noGifs = [
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3c2lvYXRnamtkOHc3M2pjMmplYTlxcGNjc3lqOG9ibXVjY3BkZmFvMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/QbQeDAEspJ5oCeGWJk/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NG4yNjJ4NG5pYnF2NzU4Z3ppYjFvdGZyNG05aXZsc3Q3amxkampzcCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KGfcnXIF8qHCThNb98/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOW53bGRoNzh5NG1ucXppNmpzYTFyanFkdWMyOG1jc29rdnlxdDVyeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XYEEvoX0Ub69ZgN9ai/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOW53bGRoNzh5NG1ucXppNmpzYTFyanFkdWMyOG1jc29rdnlxdDVyeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/SEgSwox3DSlx7QH4xQ/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOW53bGRoNzh5NG1ucXppNmpzYTFyanFkdWMyOG1jc29rdnlxdDVyeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gKHGnB1ml0moQdjhEJ/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3c2lvYXRnamtkOHc3M2pjMmplYTlxcGNjc3lqOG9ibXVjY3BkZmFvMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Y0G6gc8CJu1ynAZ1nr/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3c2lvYXRnamtkOHc3M2pjMmplYTlxcGNjc3lqOG9ibXVjY3BkZmFvMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/nR4L10XlJcSeQ/giphy.gif"
];

let noCount = 0;

function growYesButton() {
  noCount += 1;

  const width = Math.min(112 + noCount * 62, window.innerWidth);
  const height = Math.min(58 + noCount * 34, window.innerHeight);
  const font = Math.min(1.1 + noCount * 0.22, 4.5);
  const gifIndex = Math.min(noCount - 1, noGifs.length - 1);
  const textIndex = Math.min(noCount - 1, noTexts.length - 1);

  yesBtn.style.setProperty("--yes-width", `${width}px`);
  yesBtn.style.setProperty("--yes-height", `${height}px`);
  yesBtn.style.setProperty("--yes-font", `${font}rem`);
  message.textContent = noTexts[textIndex];
  cuteGif.src = noGifs[gifIndex];

  if (noCount >= 7) {
    document.body.classList.add("yes-takes-over");
    yesBtn.textContent = "YES";
  }
}

noBtn.addEventListener("click", growYesButton);

yesBtn.addEventListener("click", () => {
  celebration.classList.add("show");
});
