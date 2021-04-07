'user staict';

const changeColorBtn = document.querySelector('#changeColor-btn');
const changeColorChild = document.querySelector('#tree >li>ul>li>ul');

changeColorBtn.addEventListener('click', () => {
  changeColorChild.className = 'change-color-child';

  const changeColorChildLi = document.querySelector('.change-color-child > li');
  changeColorChildLi.style.color = 'red';
});
