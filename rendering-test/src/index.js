import { todoList } from './data.js'

const app = document.querySelector('#app')

function render() {
  // 여기에 코딩해주세요!
  for(let i=0;i<todoList.length;i++){
    const div = document.createElement("div");
    app.appendChild(div);
    div.innerText = todoList[i].title
  }
}

render()
