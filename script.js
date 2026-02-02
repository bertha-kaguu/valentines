const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");
const gif = document.getElementById("gif");
const message = document.getElementById("message");

yesBtn.addEventListener("click", () => {
  gif.src = "https://media1.popsugar-assets.com/files/thumbor/NCsLs25M77bM1lIakRf9w3fJnQk=/fit-in/500x211/top/filters:format_auto():upscale()/2021/06/28/835/n/3019466/c2255a6960da1ccdbed969.90115868_giphy-5.gif"; // kissing gif
  message.textContent = "Yay! 💖 I knew it!";
  result.classList.remove("hidden");
});

noBtn.addEventListener("click", () => {
  gif.src = "https://media.giphy.com/media/26ufcVAp3AiJJsrIs/giphy.gif"; // leaving gif
  message.textContent = "Oh no 😢 maybe next time...";
  result.classList.remove("hidden");
});
