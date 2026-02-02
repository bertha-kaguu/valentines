const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");
const gif = document.getElementById("gif");
const message = document.getElementById("message");

yesBtn.addEventListener("click", () => {
  gif.src = "https://media.giphy.com/media/3oriO6qJiXajN0TyDu/giphy.gif"; // kissing gif
  message.textContent = "Yay! 💖 I knew it!";
  result.classList.remove("hidden");
});

noBtn.addEventListener("click", () => {
  gif.src = "https://media.giphy.com/media/26ufcVAp3AiJJsrIs/giphy.gif"; // leaving gif
  message.textContent = "Oh no 😢 maybe next time...";
  result.classList.remove("hidden");
});
