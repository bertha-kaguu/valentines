const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");
const gif = document.getElementById("gif");
const message = document.getElementById("message");
const loveLetter = document.getElementById("loveLetter");
const themeToggle = document.getElementById("themeToggle");
const jsConfetti = new JSConfetti()

yesBtn.addEventListener("click", () => {
  gif.src = "https://media1.popsugar-assets.com/files/thumbor/NCsLs25M77bM1lIakRf9w3fJnQk=/fit-in/500x211/top/filters:format_auto():upscale()/2021/06/28/835/n/3019466/c2255a6960da1ccdbed969.90115868_giphy-5.gif"; // kissing gif
  message.textContent = "Yay! 💖 I knew it!";
  setTimeout(() => {loveLetter.classList.remove("hidden"); loveLetter.classList.add("show");}, 5000);
  result.classList.remove("hidden");
  jsConfetti.addConfetti()
});

noBtn.addEventListener("click", () => {
  gif.src = "https://media.giphy.com/media/26ufcVAp3AiJJsrIs/giphy.gif"; // leaving gif
  message.textContent = "Oh no 😢 maybe next time...";
  loveLetter.classList.add("hidden"); loveLetter.classList.remove("show");
  result.classList.remove("hidden");
});
function startCountdown() {
  // Set Valentine’s Day (Feb 14)
  const valentinesDay = new Date("February 14, 2026 00:00:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const distance = valentinesDay - now;

    if (distance < 0) {
      document.getElementById("countdown").textContent = "💖 Happy Valentine’s Day!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
      `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}

startCountdown();
// THEME SWITCH
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");

  themeToggle.textContent =
    document.body.classList.contains("dark")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
});