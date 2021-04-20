// 코드를 작성해주세요!
const app = document.querySelector('#app');
const toggleBt = document.querySelector('#toggleAll-btn');
const tree = document.querySelector('#tree');
const fishes = tree.childNodes[3];
const animalCh = tree.querySelector('ul');
const fishesCh = fishes.querySelector('ul');

toggleBt.addEventListener('click',() => {
    animalCh.classList.toggle('toggle');
    fishesCh.classList.toggle('toggle');
})
