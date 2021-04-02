// 코드를 작성해주세요!

const app = document.querySelector('#app');

app.addEventListener('click', (e) => {
    console.log(e.target);
    alert(e.target.innerHTML);
})