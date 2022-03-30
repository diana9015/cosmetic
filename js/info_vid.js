//-------------------------------

//fetch 구문 - 비동기로 데이터 요청하기
//fetch(데이터요청URL)
//.then(응답받은 데이터)
//.then(응답받은 후의 로직)

const body = document.querySelector("body");
const content = body.querySelector(".content");
const vid = content.querySelector(".vidinner");
const key = "AIzaSyAe6OhSffw-vmxuH8EI06jlMQPu0gCV7xs";
const playListId = "PLSGs9D6sndZf2JAmaS-YSDJj_e9idSilg";
const num = 2;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxResults=${num}`;

fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((json) => {
    let items = json.items;

    let result = "";

    items.forEach((item) => {
      let tit = item.snippet.title;
      let desc = item.snippet.description;
      if (tit.length > 50) tit = tit.substr(0, 50) + "...";
      if (desc.length > 150) desc = desc.substr(0, 150) + "...";

      let date = item.snippet.publishedAt.split("T")[0];
      console.log(date);

      result += `
              <article>
                  <a class="pic" href="#"data-vid="${item.snippet.resourceId.videoId}">
                      <img src="${item.snippet.thumbnails.standard.url}">
                  </a>
                  <div class="con">
                  <h2 data-vid="${item.snippet.resourceId.videoId}">${tit}</h2>
                  <p>${desc}</p>
                  <span>${date}</span>
                  </div>
              </article>
      `;
    });

    vid.innerHTML = result;
  });

//썸네일 클릭시 이벤트 위임.

// vid.addEventListener("click", (e) => {
//   e.preventDefault();
//   //만약 e타켓의 클릭한 부모요소가 A태그가 아니라면 리턴
//   if (!e.target.closest("a").getAttribute) "data-vid";

//   const vidId = e.target.closest("a").getAttribute("data-vid");
//   let pop = document.createElement("aside");
//   pop.innerHTML = `
//   <iframe src="http://youtube.com/embed/${vidId}"
//   frameborder="0" width="100%" height="100%" allowfullscreen></iframe>
//   <span class="btnClose">close</span>`;
//   vid.append(pop);
// });

// //popup close버튼 클릭 이벤트 위임

// vid.addEventListener("click", (e) => {
//   const pop = document.querySelector("aside");
//   if (pop == null) return;
//   const close = pop.querySelector("span");
//   if (e.target == close) e.target.closest("aside").remove();
// });

vid.addEventListener("click", (e) => createPop(e));
//popup close버튼 클릭 이벤트 위임
body.addEventListener("click", (e) => removePop(e));

function createPop(e) {
  e.preventDefault();

  //a요소의 data-vid값을 받아야 하므로
  //클릭한 요소의 부모태그가 a태그가 아니라면 중지
  if (!e.target.closest("a")) return;
  const vidId = e.target.closest("a").getAttribute("data-vid");

  let pop = document.createElement("aside");
  pop.innerHTML = `
                    <iframe src="https://youtube.com/embed/${vidId}" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>
                    <span class="btnClose">close</span>
    `;

  body.append(pop);
}

function removePop(e) {
  const pop = document.querySelector("aside");
  if (pop == null) return;
  const close = pop.querySelector("span");
  if (e.target == close) e.target.closest("aside").remove();
}

////////----------------------------------------------------------------
