// 코드를 작성해주세요!
const changeColor = document.querySelector('#changeColor-btn');
const tree = document.querySelector('#tree');


changeColor.addEventListener('click', () => {
    tree.childNodes[1].childNodes[1].childNodes[1].childNodes[1].classList.add('change');
    })
