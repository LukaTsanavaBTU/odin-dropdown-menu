const mainDiv = document.querySelector(".div-main");
const secondaryDiv = document.querySelector(".div-secondary");

mainDiv.addEventListener("mouseenter", () => {
    secondaryDiv.classList.remove("collapsed");
});

mainDiv.addEventListener("mouseleave", () => {
  secondaryDiv.classList.add("collapsed");
});
