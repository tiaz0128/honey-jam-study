// #1 미션에서 DOM 객체를 하나씩 구해서 이벤트를 등록했지만
// 이번에는 document.querySelectorAll 를 통해서 NodeList 를 구해옵니다.
// NodList 는 유사 배열이기 때문에 반복할 수 있는 방법이 있습니다.
// NodList 는 forEach 라는 함수가 내장되어있는데 이것을 통해서 각 버튼에 이벤트를 등록해주세요!
// #1 과 동일한 동작을 하도록 구현해 주시면 됩니다!

const btn = document.querySelectorAll('.btn'); 

btn.forEach((btns) => { 
    btns.addEventListener('click', (e) => { 
        alert(e.target.innerText); 
    })
}) 