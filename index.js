document.addEventListener('DOMContentLoaded', function () {
  init();
});

// call all function here
function init() {
  initUI()
  
}

function initUI() {
  // linking body
  let myBody = document.getElementsByTagName('body')[0];

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

  // menu div
  let menuDiv = document.createElement('div');
  myBody.appendChild(menuDiv);
  menuDiv.id = 'menyDiv';
  
  let mainDiv = document.createElement('div');
  myBody.appendChild(mainDiv);
  mainDiv.id = 'mainDiv'

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
  myPara2.addEventListener('click', myWeek);
  // Main window div

}
//_____________________________________________________________________________________________________
//FORMINPUT FUNCTION

function formInput() {
  let myBody = document.getElementsByTagName('body')[0]; // linked to body for now, change when navigation variables are known
  let myForm = document.createElement('div');
  myBody.appendChild(myForm);
  if (myBody.hasChildNodes()) {
   myBody.removeChild(myBody.childNodes[8]);
  }
  myBody.appendChild(myForm);

  myForm.id = 'myForm';

  // New activity input
  var inputText1 = document.createElement('p');
  inputText1.innerHTML = 'New activity:';
  inputText1.style.margin = '0';
  myForm.appendChild(inputText1);
  var inputActivity = document.createElement('input');
  myForm.appendChild(inputActivity);
  inputActivity.type = 'text';
  inputActivity.name = 'New activity:';
  inputActivity.style.width = '166px';
  inputActivity.className = 'input';

  // New activity date input
  var inputText2 = document.createElement('p');
  inputText2.innerHTML = 'Date:';
  myForm.appendChild(inputText2);
  inputText2.style.margin = '0';
  var inputDate = document.createElement('input');
  myForm.appendChild(inputDate);
  inputDate.type = 'text';
  inputDate.name = 'Date:';
  inputDate.style.width = '166px';
  inputDate.className = 'input';

  // submit-button
  var submitBtn = document.createElement('button');
  myForm.appendChild(submitBtn);
  submitBtn.innerHTML = 'Add Activity';
  submitBtn.style.borderRadius = '3px';
  submitBtn.style.marginTop = '17px';
  submitBtn.style.width = '100px';
  submitBtn.style.height = '30px';
  submitBtn.addEventListener('click', function () {
    console.log('input')
  });
}

//_____________________________________________________________________________________
// MYWEEK AND ITS CHILDREN

function myWeek() {
  let mainDiv = document.getElementById('mainDiv'); // linked to body for now, change when navigation variables are known
  let myWeek = document.createElement('div');
  myBody.appendChild(myWeek);

  if (myBody.hasChildNodes()) {
    myBody.removeChild(myBody.childNodes[8]);
   }
  myWeek.id = 'myWeek';
  let multiply = 7;
  for (i = 0; i < multiply; i++) {
    let myDay = document.createElement('div');
    myWeek.appendChild(myDay);

    myDay.className = 'myDay';
  }
}