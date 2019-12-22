var d = new Date()
console.log(d)
var date = d.getDate()
console.log(d.getDay())

//day
var dayRef = new Array;
dayRef[0] = 'sunday';
dayRef[1] = 'monday';
dayRef[2] = 'tuesday';
dayRef[3] = 'wednesday';
dayRef[4] = 'thursday';
dayRef[5] = 'friday';
dayRef[6] = 'saturday';
var day = dayRef[d.getDay()];
console.log(day);

//month
var monthRef = new Array;
monthRef[0] = 'january'
monthRef[1] = 'february'
monthRef[2] = 'mars'
monthRef[3] = 'april'
monthRef[4] = 'may'
monthRef[5] = 'june'
monthRef[6] = 'july'
monthRef[7] = 'august'
monthRef[8] = 'september'
monthRef[9] = 'october'
monthRef[10] = 'november'
monthRef[11] = 'december'
var month = monthRef[d.getMonth()]
console.log(month)

var show = (day + ' ' + date + ', ' + month);
console.log(show)