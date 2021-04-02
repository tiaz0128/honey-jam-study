// 코드를 작성해주세요!

const btns = document.querySelectorAll('.btn'); //id="app"을 배열로 가져옴

btns.forEach((btn) => { //forEach함수를 통해 배열안의 데이터들 꺼내기
    btn.addEventListener('click', (e) => { //클릭함수 호출 시 매개변수=각 버튼들
        alert(e.target.innerHTML); //e.target -> 현재 이벤트가 실행되는 버튼
    })
})