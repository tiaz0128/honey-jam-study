//[bubbling] 버블링으로 이벤트 위임처리 하기
// 이벤트 위임(event delegation) 으로 이벤트 처리하기
// 버블링이라는 현상을 이용하면 이것을 한번의 addEventListener 를 사용해서 처리 할 수 있습니다.
// 버튼의 부모인 app div 태그에 클릭 이벤트를 등록합니다.
// 이 경우 자식 버튼이 클릭되면 그 클릭이 이벤트가 부모인 app 에게 전파되는 현상입니다.
// app 에 이벤트 핸들러를 만들어두면 버튼들의 이벤트를 대신 처리해줄수 있습니다. 이것을 이벤트 위임이라 합니다!
// 버블링과 캡처링 을 참고해서 버블링을 통한 이벤트 위임을 구현해보세요!

'use strict';

const app=document.querySelector('#app');
console.log(app);

app.addEventListener('click', (e) => {
  alert(e.target.innerText);
});
