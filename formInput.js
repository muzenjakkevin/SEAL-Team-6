function formInput() {
    let myForm = document.createElement('div')
    mainDiv.appendChild(myForm);
    if (mainDiv.hasChildNodes()) {
      mainDiv.removeChild(mainDiv.childNodes[0]);
    } mainDiv.appendChild(myForm);
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

    // ADD FUNKTIONALITY input should be saved somewhere!! and remove aWeek
  }