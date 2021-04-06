const app = document.querySelector('#app')
const numInput = app.querySelector('#num')

app.addEventListener('click', (e) => {
  let num = numInput.value

  switch (e.target.innerText) {
    case '+':
      numInput.value = ++num
      break
    case '-':
      numInput.value = --num
      break
  }
})
