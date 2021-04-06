// 코드를 작성해주세요!

const btn = document.querySelectorAll('.btn');

btn.forEach((element) => {
    element.addEventListener('click', (event) => {
        alert(event.target.textContent);
    })
});