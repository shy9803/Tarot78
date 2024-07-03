//모든 article 요소를 변수 itmes에 저장
const items = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = aside.querySelector("span");

//article 요소의 개수만큼 반복
for(let el of items) {
    //현재 반복하는 article요소에 mouseenter 이벤트 발생
    el.addEventListener("click", e=>{
        //제목과 본문의 내용 요소의 src값을 변수에 저장
        let tit = e.currentTarget.querySelector("h2").innerText;
        let txt = e.currentTarget.querySelector("p").innerText;
        let imgs = e.currentTarget.querySelector("img").getAttribute("src");

        //aside 요소 안쪽 콘텐츠에 위의 변수를 저장
        aside.querySelector("h1").innerText = tit;
        aside.querySelector("p").innerText = txt;
        aside.querySelector("img").setAttribute("src", imgs);

        //aside 요소에 on을 붙여 패널 활성화
        aside.classList.add("on");
    });

    //close 요소 클릭 시
    close.addEventListener("click", ()=>{
        //aside 요소에 클래스 on을 제거해 비활성화
        aside.classList.remove("on");
    });
}
