function formInput() {
  if (mainDiv.hasChildNodes()) {
    mainDiv.removeChild(myCalendarHead);
    mainDiv.removeChild(my1WeekHead);
    mainDiv.removeChild(completeWeek);
  }
  //New header
  let myFormHeader = document.createElement('h3');
  mainDiv.appendChild(myFormHeader);
  myFormHeader.innerHTML = 'New activity';
  myFormHeader.id = 'myFormHeader';

  // Create new Container for input objects
  let myForm = document.createElement('div');
  mainDiv.appendChild(myForm);
  myForm.id = 'myForm';

  // New activity input
  var inputText1 = document.createElement('p');
  inputText1.innerHTML = 'New activity:';
  inputText1.style.margin = '0';
  myForm.appendChild(inputText1);
  var inputActivity = document.createElement('input');
  myForm.appendChild(inputActivity);
  inputActivity.type = 'text';
  inputActivity.value = 'New task'
  inputActivity.name = 'New activity:';
  inputActivity.style.width = '166px';
  inputActivity.className = 'input';
  inputActivity.addEventListener('click', function () {
    inputActivity.value = '';
  })

  // New activity date input
  var inputText2 = document.createElement('p');
  inputText2.innerHTML = 'Date:';
  myForm.appendChild(inputText2);
  inputText2.style.margin = '0';
  var inputDate = document.createElement('input');
  myForm.appendChild(inputDate);
  inputDate.type = 'text';
  inputDate.value = day + ' ' + date + '/' + month;
  inputDate.name = 'Date:';
  inputDate.style.width = '166px';
  inputDate.className = 'input';
  inputDate.addEventListener('click', function () {
    inputDate.value = '';
  })

  // Submit-button
  var submitBtn = document.createElement('button');
  myForm.appendChild(submitBtn);
  submitBtn.innerHTML = 'Add Activity';
  submitBtn.style.borderRadius = '3px';
  submitBtn.style.marginTop = '17px';
  submitBtn.style.width = '100px';
  submitBtn.style.height = '30px';
  submitBtn.addEventListener('click', function () {
    inputActivity.focus()
    var showInput = 'Activity: ' + inputActivity.value + '<br>' + ' Date: ' + inputDate.value + '<br>';
    console.log(showInput);
    var newActivity = document.createElement('div');
    mainDiv.appendChild(newActivity);
    newActivity.innerHTML = showInput;
    newActivity.className = 'newActivity';
    delActivity = document.createElement('button')
    newActivity.appendChild(delActivity)
    delActivity.innerHTML = 'Delete Activity';
    delActivity.style.position = 'relative'
    delActivity.style.right = '0px';
    delActivity.addEventListener('click', function(){
      mainDiv.removeChild(newActivity)
    false})
  })
  myPara1.removeEventListener('click', formInput);
  myPara2.addEventListener('click', aWeek);
}