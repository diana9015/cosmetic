//log-in popup

const header = document.querySelector("#header_sub");
const logBtn = header.querySelector(".logopen");
const logPop = header.querySelector(".loginpop");
const logClose = header.querySelector(".logclose");

logBtn.addEventListener("click", (e) => {
  e.preventDefault();

  logPop.style.opacity = 0.8;
});

logClose.addEventListener("click", (e) => {
  e.preventDefault();

  logPop.style.opacity = "0";
});

const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");

//btnCall을 클릭했을 때
btnCall.onclick = function (e) {
  //링크이동금지
  e.preventDefault();

  //btnCall에 on이 있으면 제거, 없으면 추가
  btnCall.classList.toggle("on");
  //menuMo에 on이 있으면 제거, 없으면 추가
  menuMo.classList.toggle("on");
};
