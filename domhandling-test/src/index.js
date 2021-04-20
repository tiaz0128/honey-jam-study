// 코드를 작성해주세요!
const changeColor = document.querySelector('#changeColor-btn');
const tree = document.querySelector('#tree');
const treeLi = tree.querySelector('li');
const Mammals = treeLi.querySelector('li');
const cows = Mammals.querySelector('li');
const MammalsUl = Mammals.querySelector('ul');

console.log(Mammals.querySelector('li'))
changeColor.addEventListener('click', () => {
    MammalsUl.classList.add('change');
    cows.classList.add('change');
    })

