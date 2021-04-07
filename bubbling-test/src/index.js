// 코드를 작성해주세요!

const delBtn = document.querySelector('#delBtn');
const btns = document.querySelectorAll('.btn');

delBtn.addEventListener('click', () => {
    btns.forEach((btn) => {
        //console.log(btn.dataset.itemId)
        if(btn.dataset.itemId % 2 == 0) {
            btn.remove('btn');
        }
    })
})