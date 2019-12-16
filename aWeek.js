function aWeek() {
    //mainDiv.removeChild(myForm)
    // Calendar h3
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
      mainDiv.appendChild(myDay);
      myDay.className = 'myDay';
    } if (mainDiv.hasChildNodes()) {
      var multiply = 0;
      mainDiv.removeChild(mainDiv.childNodes[0]);
    } mainDiv.appendChild(myday);

    // STOP 7 NEW "DAYS" EVERY CLICK, ADD DAYS IN "myDay"-DIVS with array and remove myForm
  }