const slider = document.querySelector(".slider");
const panel = slider.querySelector(".panel");
const btns = slider.querySelectorAll(".btns li");

//각 버튼의 갯수만큼 반복을 돌면서
btns.forEach((el, index) => {
  //각 버튼을 클릭했을 때
  el.addEventListener("click", (e) => {
    e.preventDefault();

    //클릭한 버튼에 클래스 on이 있는지(활성화되어있는지) 판별하여
    let isOn = e.currentTarget.classList.contains("on");
    //만약 있다면 - 아래 함수를 실행하지 않고 종료
    if (isOn) return;
    activation(index);
  });
});

//활성화 함수 정의
function activation(index) {
  console.log("click!!!");
  //순번값을 활용해서 panel 이동 모션
  new Anime(panel, {
    prop: "margin-left",
    value: -100 * index + "%",
    duration: 500,
  });

  //버튼 활성화
  for (let el of btns) el.classList.remove("on");
  btns[index].classList.add("on");
}
