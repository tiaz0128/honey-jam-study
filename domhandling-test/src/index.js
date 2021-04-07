// 코드를 작성해주세요!

const changeBtn = document.querySelector('#changeColor-btn');
const mammals = document.querySelector('#tree>li>ul>li>ul');
const mammalsChange = mammals.querySelectorAll('li');

changeBtn.addEventListener('click', () => {
    console.log(mammalsChange);
    mammalsChange.forEach((mc) => {
        mc.classList.toggle('change');
    })
})