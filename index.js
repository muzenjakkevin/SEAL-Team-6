document.addEventListener('DOMContentLoaded', function () {
   init();
});

function init() {
  initUI();
  addActivity();
}

function initUI(){
  // linking body
  let myBody = document.getElementsByTagName('body')[0];

  // first div
  let firstDiv = document.createElement('div');
  myBody.appendChild(firstDiv)[0];
  firstDiv.id= 'firstDiv';

  // header
  let myHeader = document.createElement('h2');
  firstDiv.appendChild(myHeader);
  myHeader.innerHTML = 'Calendar application 2000';
  myHeader.style.margin = '0';

  // menu div
  let menuDiv = document.createElement('div');
  myBody.appendChild(menuDiv)[1];
  menuDiv.id = 'menyDiv';

  // first paragraph
  let myPara1 = document.createElement('p');
  menuDiv.appendChild(myPara1);
  myPara1.innerHTML = 'New activity';
  myPara1.id = 'myPara1';
  openActivity();

  // second paragraph 
  let myPara2 = document.createElement('p');
  menuDiv.appendChild(myPara2);
  myPara2.innerHTML = 'Calendar';
  myPara2.id = 'myPara2';
}

function addActivity(){
  myPara1.addEventListener('onclick', body.innerHTML = 'activity');
}