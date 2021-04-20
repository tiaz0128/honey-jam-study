// 코드를 작성해주세요!
const app = document.querySelector('#app');
const tree = document.querySelector('#tree');
const animal = tree.querySelector('li');
const animals = tree.querySelector('ul');
const mammal = animals.querySelector('li');
const mammals = animals.querySelector('ul');
const other = animals.childNodes[3];
const others = animals.childNodes[3].querySelector('ul');
const fish = tree.childNodes[3];
const fishes = tree.childNodes[3].querySelector('ul');
const aqua = fishes.querySelector('li');
const aquarium = fishes.querySelector('ul');
const ssea = fishes.childNodes[3];
const sea = fishes.childNodes[3].querySelector('ul');


app.addEventListener('click', (e) => {
    if(e.target == animal) animals.classList.toggle('toggle');
    if(e.target == mammal) mammals.classList.toggle('toggle');
    if(e.target == other) others.classList.toggle('toggle');
    if(e.target == fish) fishes.classList.toggle('toggle');
    if(e.target == aqua) aquarium.classList.toggle('toggle');
    if(e.target == ssea) sea.classList.toggle('toggle');
    
})

