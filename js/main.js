const header = document.querySelector("header");
const popup = header.querySelector(".popup");
const btnClose = popup.querySelector(".btnclose");
const isCookie = document.cookie.indexOf("today=done");
let isOn;

isCookie == -1 ? (isOn = "block") : (isOn = "none");
popup.style.display = isOn;

btnClose.addEventListener("click", (e) => {
  e.preventDefault();
  //체크박스에 체크가 되어있으면
  //쿠키를 생성
  let isChecked = popup.querySelector("input[type=checkbox]").checked;
  if (isChecked) setCookie("today", "done", 1);

  popup.style.display = "none";
});

// 쿠키 생성 함수(쿠키를 만들어놓음 =)
function setCookie(name, val, due) {
  const today = new Date();
  const day = today.getDate();
  today.setDate(day + due);
  const duedate = today.toGMTString();
  document.cookie = `${name}=${val}; path=/; expires=${duedate}`;
}

const content = document.querySelector(".content");
const slider = content.querySelector(".slider");
const prev = content.querySelector(".prev");
const next = content.querySelector(".next");
const speed = 1000;

init(slider);

function prevSlide(frame) {
  const ul = frame.querySelector("ul");

  new Anime(ul, {
    prop: "left",
    value: "0%",
    duration: speed,
    callback: () => {
      ul.style.left = "-100%";
      ul.prepend(ul.lastElementChild);
      enableClick = true;
    },
  });
}

next.addEventListener("click", (e) => {
  e.preventDefault();
  nextSlide(slider);
});

prev.addEventListener("click", (e) => {
  e.preventDefault();
  prevSlide(slider);
});

function init(frame) {
  const ul = frame.querySelector("ul");
  const lis = ul.querySelectorAll("li");
  const len = lis.length;
  //페이지가 로딩되었을 때 ul의 초기 left값을 -100%로 설정
  ul.style.left = "-100%";
  ul.prepend(ul.lastElementChild); //ul의 마지막li를 맨앞으로 배치
  ul.style.width = `${100 * len}%`; //ul의 너비값 설정
  lis.forEach((li) => {
    li.style.width = `${100 / len}%`;
  });
}

function nextSlide(frame) {
  const ul = frame.querySelector("ul");

  new Anime(ul, {
    prop: "left",
    value: "-200%",
    duration: speed,
    callback: () => {
      ul.append(ul.firstElementChild);
      ul.style.left = "-100%";
      enableClick = true;
    },
  });
}
