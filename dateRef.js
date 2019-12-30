var d = new Date();
console.log(d);
var date = d.getDate();

//day
var dayRef = new Array;
dayRef[0] = 'Sun';
dayRef[1] = 'Mon';
dayRef[2] = 'Tue';
dayRef[3] = 'Wed';
dayRef[4] = 'Thu';
dayRef[5] = 'Fri';
dayRef[6] = 'Sat';
var day = dayRef[d.getDay()];

//month
var monthRef = new Array;
monthRef[0] = '1';
monthRef[1] = '2';
monthRef[2] = '3';
monthRef[3] = '4';
monthRef[4] = '5';
monthRef[5] = '6';
monthRef[6] = '7';
monthRef[7] = '8';
monthRef[8] = '9';
monthRef[9] = '10';
monthRef[10] = '11';
monthRef[11] = '12';
var month = monthRef[d.getMonth()];

var show = (day + ' ' + date + '/' + month);
console.log(show);