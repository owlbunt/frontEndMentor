const preview = document.querySelector(".preview");
document.addEventListener("mouseover", (event) => {
  preview.style.opacity = event.target.matches(".title") ? "1" : "0";
});
