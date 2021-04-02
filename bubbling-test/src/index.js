'use strict';
// 코드를 작성해주세요!
// DOM 객체를 가져오는 document.querySelector 사용합니다!
// 4개의 버튼이 클릭이 되면 동작하게 document.addEventListener 를 사용하여 이벤트를 처리 할 핸들러함수를 등록하세요.
// 각각 버튼에 적혀있는 숫자값을 alert 로 메시지창이 뜨게 구현해주시면 됩니다!

const btn1=document.querySelector('#btn-1');
const btn2=document.querySelector('#btn-2');
const btn3=document.querySelector('#btn-3');
const btn4=document.querySelector('#btn-4');

btn1.addEventListener('click', function(){
    console.log(btn1);
    alert(btn1.innerText);
});
btn2.addEventListener('click', function(){
    console.log(btn2);
    alert(btn2.innerText);
});
btn3.addEventListener('click', function(){
    console.log(btn3);
    alert(btn3.innerText);
});
btn4.addEventListener('click', function(){
    console.log(btn4);
    alert(btn4.innerText);
});