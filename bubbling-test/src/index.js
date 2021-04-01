'user strict';

const btns = document.querySelectorAll('.btn');

btns.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    alert(e.target.textContent);
  })
);
