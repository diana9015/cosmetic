const header = document.querySelector('header');
const popup = header.querySelector('.popup');
const btnClose = popup.querySelector('.btnclose');
const isCookie = document.cookie.indexOf('today=done');
let isOn;

isCookie == -1 ? (isOn = 'block') : (isOn = 'none');
popup.style.display = isOn;

btnClose.addEventListener('click', (e) => {
	e.preventDefault();
	//체크박스에 체크가 되어있으면
	//쿠키를 생성
	let isChecked = popup.querySelector('input[type=checkbox]').checked;
	if (isChecked) setCookie('today', 'done', 1);

	popup.style.display = 'none';
});

// 쿠키 생성 함수(쿠키를 만들어놓음 =)
function setCookie(name, val, due) {
	const today = new Date();
	const day = today.getDate();
	today.setDate(day + due);
	const duedate = today.toGMTString();
	document.cookie = `${name}=${val}; path=/; expires=${duedate}`;
}

const slider = document.querySelector('#slider');
const ul = slider.querySelector('ul');
const prev = slider.querySelector('.prev');
const next = slider.querySelector('.next');
const speed = 1000;
let enableClick = true;

//페이지가 로딩되었을때 ul의 초기값 -100%로 설정
ul.style.left = '-100%';
//왜 셀렉트올이 아닌가..?

//next버튼을 클릭했을때
next.addEventListener('click', (e) => {
	e.preventDefault();

	if (enableClick) {
		enableClick = false;
		nextSlide();
	}
	//   //ul의 left값을 변경해야함. -100%

	//   //new Anim(우리가 움직여야할 요소,anim)

	//   new Anim(ul, {
	//     prop: "left",
	//     value: "-200%",
	//     duration: 1000,
	//     //callback은 다시 하는거
	//     callback: () => {
	//       ul.style.left = "-100%";
	//       ul.append(ul.firstElementChild);
	//     },
	//   });
});

prev.addEventListener('click', (e) => {
	e.preventDefault();

	if (enableClick) {
		prevSlide();
		enableClick = false;
	}
	//   new Anim(ul, {
	//     prop: "left",
	//     value: "0%",
	//     duration: 1000,

	//     callback: () => {
	//       ul.style.left = "-100%";
	//       ul.prepend(ul.lastElementChild);
	//     },
	//   });
});

//---------------------------함수로 변환--
function nextSlide() {
	new Anime(ul, {
		prop: 'left',
		value: '-200%',
		duration: 1000,

		callback: () => {
			ul.style.left = '-100%';
			ul.append(ul.firstElementChild);
			enableClick = true;
		},
	});
}

function prevSlide() {
	new Anime(ul, {
		prop: 'left',
		value: '0%',
		duration: 1000,

		callback: () => {
			ul.style.left = '-100%';
			ul.prepend(ul.lastElementChild);
			enableClick = true;
		},
	});
}

const logBtn = header.querySelector('.logopen');
const logPop = header.querySelector('.loginpop');
const logClose = header.querySelector('.logclose');

logBtn.addEventListener('click', (e) => {
	e.preventDefault();
	logPop.style.display = 'block';
});

logClose.addEventListener('click', (e) => {
	e.preventDefault();

	logPop.style.display = 'none';
});

const btnCall = document.querySelector('.btnCall');
const menuMo = document.querySelector('.mob_nav');

//btnCall을 클릭했을 때
btnCall.onclick = function (e) {
	//링크이동금지
	e.preventDefault();

	//btnCall에 on이 있으면 제거, 없으면 추가
	btnCall.classList.toggle('on');
	//menuMo에 on이 있으면 제거, 없으면 추가
	menuMo.classList.toggle('on');
};

btnCall.addEventListener('click', () => {
	if (menuMo.style.right == '8px') {
		menuMo.style.right = '-100%';
	} else {
		menuMo.style.right = '8px';
	}
});
