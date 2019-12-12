document.addEventListener('DOMContentLoaded', function () {
   init();
});

// call all function here
function init() {
   initUI()
   formInput()
   myWeek()
   
} 

function initUI() {
   // linking body
   let myBody = document.getElementsByTagName('body')[0];

   // first div
   let firstDiv = document.createElement('div');
   myBody.appendChild(firstDiv);
   firstDiv.id = 'firstDiv';

   // header
   let myHeader = document.createElement('h2');
   firstDiv.appendChild(myHeader);
   myHeader.innerHTML = 'Calendar application 2000';
   myHeader.style.margin = '0';

   // menu div
   let menuDiv = document.createElement('div');
   myBody.appendChild(menuDiv);
   menuDiv.id = 'menyDiv';

   // first paragraph
   let myPara1 = document.createElement('p');
   menuDiv.appendChild(myPara1);
   myPara1.innerHTML = 'New activity';
   myPara1.id = 'myPara1';

   // second paragraph 
   let myPara2 = document.createElement('p');
   menuDiv.appendChild(myPara2);
   myPara2.innerHTML = 'Calendar';
   myPara2.id = 'myPara2';

  /*  let thirdDiv = document.createElement('div');
   myBody.appendChild(thirdDiv);
   thirdDiv.id = 'thirdDiv';
 */
   
}
//_____________________________________________________________________________________________________
//FORMINPUT FUNCTION
function formInput() {
   let myBody = document.getElementsByTagName('body')[0]; // linked to body for now, change when navigation variables are known
   let myForm = document.createElement('div');
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
   var newActivity = inputDate.innerHTML + inputActivity.innerHTML;
   var submitBtn = document.createElement('button');
   myForm.appendChild(submitBtn);
   submitBtn.innerHTML = 'Add Activity';
   submitBtn.style.borderRadius = '3px';
   submitBtn.style.marginTop = '17px';
   submitBtn.style.width = '100px';
   submitBtn.style.height = '30px';
   submitBtn.addEventListener('click', function() {
      console.log('input')
   });
}
//_____________________________________________________________________________________
// MYWEEK AND ITS CHILDREN
function myWeek() {
   let myBody = document.getElementsByTagName('body')[0]; // linked to body for now, change when navigation variables are known
   let myWeek = document.createElement('div');
   myBody.appendChild(myWeek);
   myWeek.id = 'myWeek';
   let multiply = 7;
   for (i = 0; i < multiply; i++) {
   let myDay = document.createElement('div');
   myWeek.appendChild(myDay);
   myDay.id = 'myDay'
   }
}
// var weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];