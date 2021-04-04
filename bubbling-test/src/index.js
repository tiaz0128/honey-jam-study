// 코드를 작성해주세요!
const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');
const btn4 = document.querySelector('#btn-4');

btn1.addEventListener('click', (event) => {
    alert(event.target.textContent);
})
btn2.addEventListener('click', (event) => {
    alert(event.target.textContent);
})
btn3.addEventListener('click', (event) => {
    alert(event.target.textContent);
})
btn4.addEventListener('click', (event) => {
    alert(event.target.textContent);
})
