'user strict';

const btn = document.querySelector('#app');

btn.addEventListener('click', (e) => {
  alert(e.target.textContent);
});
