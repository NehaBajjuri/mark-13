var input = document.querySelector('#bday-input');
var showBut = document.querySelector('#show-button');
showBut.addEventListener("click",clickHandler);
var result = document.querySelector('#output');
function clickHandler(e)
{
   var bdayStr = input.value;
   if(bdayStr != '')
   {
    var listOfDate = bdayStr.split('-');
    var date = {
        day:Number(listOfDate[2]),
        month:Number(listOfDate[1]),
        year:Number(listOfDate[0])
    };
    //console.log(date);
   }
  var isPalindrome = checkPalin(date);
  if(isPalindrome)
  {
    result.innerText = 'Yayy!! Your birthday is a palindrome!!💃🕺';
  }
  else{
    var [count,nextDate] = getNextPalindrome(date);
    result.innerText = `The next palindrome is ${nextDate.day}-${nextDate.month}-${nextDate.year},you missed it by ${count} days :/`
  }

}
function reverseStr(str){

    var listOfChars = str.split('');
    var reverseListOfChars = listOfChars.reverse();
    var reversedStr = reverseListOfChars.join('');
    //return str.split('').reverse().join('')--in a single line
    return reversedStr;
}
function isPalindrome(str)
{
var reverse = reverseStr(str);
return str==reverse;
}
function convertDateToStr(date)
{
   
    var dateStr={day:'',month:'',year:''};
    if(date.day<10)
    {
        dateStr.day ='0'+date.day;
    }
    else{
        dateStr.day=date.day.toString();
    }
    if(date.month<10)
    {
        dateStr.month ='0'+date.month;
    }
    else{
        dateStr.month=date.month.toString();
    }
    dateStr.year = date.year.toString();
    return dateStr;
}


function getAllDateFormats(date)
{
  var dateStr = convertDateToStr(date);
  var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
  var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
  var mmddyy =dateStr.month + dateStr.day + dateStr.year.slice(-2);
  var yymmdd =dateStr.year.slice(-2) + dateStr.month + dateStr.day;
  var ddmmyy= dateStr.day+dateStr.month+dateStr.year.slice(-2);
return [ddmmyyyy, mmddyyyy, yyyymmdd,mmddyy, yymmdd, ddmmyy];

}
// var date={
//     day: 2,
//     month:2,
//     year:2020
// };

function checkPalin(date)
{
    var listOfPalin=getAllDateFormats(date);
    var flag = false;
    for(var i=0;i<listOfPalin.length;i++)
    {
        if(isPalindrome(listOfPalin[i]))
        {
           flag=true;
            break;
        }
    }
    return flag;
}
function getNextDAte(date){
     var day = date.day+1;
     var month = date.month;
     var year = date.year;
     var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(month == 2)
    {
        if(isLeapYear(year))
        {
            if(day>29){
                day =1;
                month++;
            }
        }
        else{
            if(day>28)
            {
                day =1;
                month++;
            }
        }
    }
    else{
        if(day > daysInMonth[month - 1])
        {
            day = 1;
            month++;
        }
        
    }
    if(month>12)
    {
        month=1;
        year++;
    }
    return{
        day: day,
        month: month,
        year: year,
    }

}
function getPrevDAte(date){
    var day = date.day-1;
    var month = date.month;
    var year = date.year;
    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
   if(month == 3)
   {
       if(isLeapYear(year))
       {
           if(day<1){
               day =29;
               month--;
           }
       }
       else{
           if(day<1)
           {
               day =28;
               month--;
           }
       }
   }
   else{
       if(day < 1)
       {
           day=daysInMonth[month-1];
           month--;
       }
       
   }
   if(month<1)
   {
       month=12;
       year--;
   }
   return{
       day: day,
       month: month,
       year: year,
   }

}
function isLeapYear(year){
  
    if (year % 400===0)
    {
        return true;
    }
    if(year % 100 ===0)
    {
        return false;
    }
    if(year % 4 ===0)
    {
        return true;
    }
    return false;
}
function getNextPalindrome(date)
{
    var count=0;
    var nextDate = getNextDAte(date);
    while(1)
    {
        count++;
        var isPalindrome = checkPalin(nextDate);
        if(isPalindrome)
        {
            break;
        }
        nextDate = getNextDAte(nextDate);
    }
    return [count,nextDate];
}
function getPrevPalindrome(date)
{
    var count=0;
    var nextDate = getPrevDAte(date);
    while(1)
    {
        count++;
        var isPalindrome = checkPalin(nextDate);
        if(isPalindrome)
        {
            break;
        }
        nextDate = getPrevDAte(nextDate);
    }
    return [count,nextDate];
}
//console.log(getNextDAte(date));
//console.log(checkPalin(date));
