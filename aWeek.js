function aWeek() {
  if (mainDiv.hasChildNodes()) {
    mainDiv.removeChild(myForm)
  }
  // Calendar h3
  let completeWeek = document.createElement('div')
  mainDiv.appendChild(completeWeek)
  completeWeek.id = 'completeWeek'

  let myCalendarHead = document.createElement('h3');
  mainDiv.appendChild(myCalendarHead);
  myCalendarHead.innerHTML = 'Calendar';
  myCalendarHead.id = 'myCalendarHead';

  // 1 Week h3
  let my1WeekHead = document.createElement('h3');
  mainDiv.appendChild(my1WeekHead);
  my1WeekHead.innerHTML = '1 Week';
  my1WeekHead.id = 'my1WeekHead';

  var multiply = 7;
  for (i = 0; i < multiply; i++) {
    let myDay = document.createElement('div');
    completeWeek.appendChild(myDay);
    myDay.className = 'myDay';
  }
  myPara2.removeEventListener('click', aWeek);
  myPara1.addEventListener('click', formInput);
}