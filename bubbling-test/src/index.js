'user strict';

const delBtn = document.querySelector('#delBtn');
const app = document.querySelector('#app');

delBtn.addEventListener('click', () => {
  const btns = document.querySelectorAll('.btn');

  btns.forEach((btn) => {
    const even = btn.getAttribute('data-item-id');
    if (even % 2 === 0) {
      app.removeChild(btn);
    }
  });
});
