// 코드를 작성해주세요!
const delBtn = document.querySelector('#delBtn');
const app = document.querySelector('#app');
const btn = document.querySelectorAll('.btn');


// btn.forEach((element) => {
//     if(element.getAttribute('data-item-id')%2==0){
//         delBtn.addEventListener('click', () => {
//         app.removeChild(element);
//         })  
//     }
// })

delBtn.addEventListener('click', () =>{
    btn.forEach((e) => {
        if(e.dataset.itemId%2===0) {
            app.removeChild(e);
        }
    })
})