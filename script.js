const toggleBtn = document.getElementById("toggle-button");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");
});
