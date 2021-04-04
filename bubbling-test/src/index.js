// 코드를 작성해주세요!
const app = document.querySelector('#app');

app.addEventListener('click',(e) => {
    if(e.target.className=='btn'){
    alert(e.target.textContent);
}
})