const header = document.querySelector("#header_sub");
const logBtn = header.querySelector(".logopen");
const logPop = header.querySelector(".loginpop");
const logClose = header.querySelector(".logclose");

logBtn.addEventListener("click", (e) => {
  e.preventDefault();

  logPop.style.display = "block";
});

logClose.addEventListener("click", (e) => {
  e.preventDefault();

  logPop.style.display = "none";
});
