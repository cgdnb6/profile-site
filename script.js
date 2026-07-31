const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const themeBtn = document.getElementById("themeBtn");
const root = document.documentElement;

function setTheme(t){
  root.setAttribute("data-theme", t);
  localStorage.setItem("theme", t);
}

const saved = localStorage.getItem("theme");
if (saved) setTheme(saved);

themeBtn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") || "dark";
  setTheme(current === "dark" ? "light" : "dark");
});
