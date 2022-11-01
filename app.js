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
return str===reverse;

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
var date={
    day: 20,
    month:2,
    year:2002
};

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
console.log(checkPalin(date));
