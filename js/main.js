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

//슬라이드
const slider = document.querySelector("#slider");
const recommend = document.querySelector(".recommend");
const prev = recommend.querySelector(".prev");
const next = recommend.querySelector(".next");
const speed = 1000;
let enableClick = true;

init(slider);

next.addEventListener("click", (e) => {
  e.preventDefault();

  if (enableClick) {
    enableClick = false;
  }
  nextSlide(frame);
});

prev.addEventListener("click", (e) => {
  e.preventDefault();

  if (enableClick) {
    enableClick = false;
  }
  prevSlide(frame);
});

//페이지가 로딩되었을때 ul의 초기값 -100%로 설정
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

//왜 셀렉트올이 아닌가..?

//next버튼을 클릭했을때

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

// const slider1 = document.querySelector("#slider1");
// const slider2 = document.querySelector("#slider2");
// const prev = document.querySelector(".prev");
// const next = document.querySelector(".next");
// const speed = 1000;
// let enableClick = true;

// //초기화 함수 호출
// init(slider1);
// init(slider2);

// //next버튼을 클릭했을 때
// next.addEventListener("click", e=>{
//     e.preventDefault();

//     if(enableClick){
//         enableClick = false;
//         nextSlide(slider1);
//         nextSlide(slider2);
//     }
// });

// prev.addEventListener("click", e=>{
//     e.preventDefault();

//     if(enableClick){
//         prevSlide(slider1);
//         prevSlide(slider2);
//         enableClick = false;
//     }

// });

// //화면로딩시 패널의 위치와 크기 초기화하는 함수 정의
// function init(frame){
//     const ul = frame.querySelector("ul");
//     const lis = ul.querySelectorAll("li");
//     const len = lis.length;
//     //페이지가 로딩되었을 때 ul의 초기 left값을 -100%로 설정
//     ul.style.left = "-100%";
//     ul.prepend(ul.lastElementChild); //ul의 마지막li를 맨앞으로 배치
//     ul.style.width = `${100 * len}%`; //ul의 너비값 설정
//     lis.forEach((li)=>{
//         li.style.width = `${100 / len}%`
//     })
// }

// function prevSlide(frame){
//     const ul = frame.querySelector("ul");

//     new Anim(ul,{
//         prop:"left",
//         value :"0%",
//         duration:speed,
//         callback :()=>{
//             ul.style.left = "-100%";
//             ul.prepend(ul.lastElementChild);
//             enableClick = true;
//         }
//     })
// }

// function nextSlide(frame){
//     const ul = frame.querySelector("ul");

//     new Anim(ul, {
//         prop:"left",
//         value : "-200%",
//         duration: speed,
//         callback :()=>{
//             ul.append(ul.firstElementChild);
//             ul.style.left = "-100%";
//             enableClick = true;
//         }
//     })
// }
