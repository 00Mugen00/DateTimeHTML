/**
 * Created by john on 11/08/16.
 */
function writeDate(){
    var dateObject = new Date();

    var day = dateObject.getDate();
    var month = dateObject.getMonth();
    var year = dateObject.getFullYear();

    var hour = dateObject.getHours();
    var minutes = dateObject.getMinutes();
    var seconds = dateObject.getSeconds();

    hour = checkTime(hour);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    document.getElementById("dateToday").innerHTML= day+"/"+month+"/"+year+" || "+hour+":"+minutes+":"+seconds;

    setTimeout(writeDate,500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i;}// add zero in front of numbers < 10
    return i;
}