function aWeek() {
  if (mainDiv.hasChildNodes()) {
    mainDiv.removeChild(myForm);
    mainDiv.removeChild(myFormHeader);
  }
  // Calendar h3
  let completeWeek = document.createElement('div');
  mainDiv.appendChild(completeWeek);
  completeWeek.id = 'completeWeek';

  let myCalendarHead = document.createElement('h3');
  mainDiv.appendChild(myCalendarHead);
  myCalendarHead.innerHTML = 'Calendar';
  myCalendarHead.id = 'myCalendarHead';

  // 1 Week h3
  let my1WeekHead = document.createElement('h3');
  mainDiv.appendChild(my1WeekHead);
  my1WeekHead.innerHTML = '1 Week';
  my1WeekHead.id = 'my1WeekHead';

  // Renewed dateref in function to stop date from wandering after first trigger
  var date = d.getDate()

  // New divs for weekdays
  for (i = 0; i < dayRef.length; date++ , i++) {
    let myDay = document.createElement('div');
    completeWeek.appendChild(myDay);
    myDay.innerHTML = dayRef[i] + '<br>' + date + '/' + month;
    myDay.className = 'myDay';
  }
  myPara2.removeEventListener('click', aWeek);
  myPara1.addEventListener('click', formInput);
}