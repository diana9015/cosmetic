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
