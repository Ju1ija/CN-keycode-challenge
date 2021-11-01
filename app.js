const keycode = document.getElementById("keycode");
const intro = document.getElementById("any-key");
const about = document.getElementById("about");
const key = document.getElementById("key");
const code = document.getElementById("code");
const which = document.getElementById("which");

document.addEventListener("keydown", (e) => {
  intro.style.display = "none";
  keycode.textContent = `${e.which}`;
  key.textContent = `${e.key}`;
  code.textContent = `${e.code}`;
  which.textContent = `${e.which}`;
  about.style.display = "flex";
});