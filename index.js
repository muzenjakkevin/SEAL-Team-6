document.addEventListener('DOMContentLoaded', function () {
  init();
})

// call all function here
function init() {
  initUI();
}

function initUI() {
  // linking body
  let myBody = document.body;

  // first div
  let firstDiv = document.createElement('div');
  myBody.appendChild(firstDiv);
  firstDiv.id = 'firstDiv';

  // header
  let myHeader = document.createElement('p');
  firstDiv.appendChild(myHeader);
  myHeader.innerHTML = 'Calendar application 2000';
  myHeader.style.margin = '0';
  myHeader.style.fontFamily = 'Arial';
  myHeader.style.fontSize = '20px';

  // LoginRef-button
  var loginrefBtn = document.createElement('button');
  myHeader.appendChild(loginrefBtn);
  loginrefBtn.id = 'loginrefBtn'
  loginrefBtn.innerHTML = 'Login';
  loginrefBtn.addEventListener('click', login)

  // menu div
  let menuDiv = document.createElement('div');
  myBody.appendChild(menuDiv);
  menuDiv.id = 'menyDiv';

  // first paragraph
  let myPara1 = document.createElement('button');
  menuDiv.appendChild(myPara1);
  myPara1.innerHTML = 'New activity';
  myPara1.id = 'myPara1';
  myPara1.addEventListener('click', formInput);

  // second paragraph 
  let myPara2 = document.createElement('button');
  menuDiv.appendChild(myPara2);
  myPara2.innerHTML = 'Calendar';
  myPara2.id = 'myPara2';
  myPara2.addEventListener('click', aWeek);

  // new div for all main-content 
  var mainDiv = document.createElement('div');
  myBody.appendChild(mainDiv);
  mainDiv.id = 'mainDiv';
}