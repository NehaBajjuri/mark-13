function reverseStr(str){

    var listOfChars = str.split('');
    var reverseListOfChars = listOfChars.reverse();
    var reversedStr = reverseListOfChars.join('');
    //return str.split('').reverse().join('')--in asingle line

    return reversedStr;
}
function isPalindrome(str)
{
var reverse = reverseStr(str)
if(str === reverse)
{
    return true;
}
else{
    return false;
}

}
console.log(isPalindrome('madam'));
console.log(isPalindrome('vikatakavi'));
