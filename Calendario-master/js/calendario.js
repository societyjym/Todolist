$(document).ready(
    initCalender()  
)
var monthName = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

var now = new Date();
var day = now.getDate();
var month = now.getMonth();
var currentMonth = month;
var year = now.getFullYear();

function initCalender() {
    $("#text_day").text(day);
    $("#text_month").text(monthName[currentMonth]);

    $("#text_month_02").text(monthName[month]);
    $("#text_year").text(year);

    $(".item_day").remove();

    for(let i = starDay(); i>0; i--){
        $(".container_days").append
        (`<span class = "week_days_item item_day prev_days">${getTotalDays()-1-(i-1)}</span>`);
    }

    for(let i = 1; i<=getTotalDays(); i++){
        if (i == day & month == currentMonth) {
            $(".container_days").append
            (`<span class = "week_days_item item_day today">${i}</span>`);  
        } else{
            $(".container_days").append
            (`<span class = "week_days_item item_day ">${i}</span>`);
        }
    }


}


    

function getNextMonth(){
    if (month !== 11) {
        month++;
    }else{
        year++;
        month = 0;
    }
    initCalender();
}

function getPrevMonth() {
    if (month !== 0) {
        month--
    }else{
        year--;
        month = 11;
    }
    initCalender();
    
}

function starDay() {
    var start = new Date(year, month, 1)
    return((start.getDate()-1) === -1) ? 6 : start.getDay();
}

function leapMonth() {
    return((year % 400 === 0) || (year % 4 === 0) && (year % 100 !== 0));
}

function getTotalDays() {
    if (month === -1) month = 11; {
    
    if (month == 3 || month == 5 || month == 8 || month == 10) {
        return 31;
    }else if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11 ) {
        return 30;
    }else {
        return leapMonth()  ? 29:28;
    }    
    }
}
$("#next_month").click(function () {
    getNextMonth();
});
$("#last_month").click(function(){
    getPrevMonth();
})