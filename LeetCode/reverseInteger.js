/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var num = x.toString();
    console.log(num);
    var xArr = num.split("");
    console.log(xArr);
      var reverseArr =[]
      if (xArr[0]=='-'){
  
          reverseArr.push('-');
          xArr.splice(0,1);
          var reversexArr= xArr.reverse();
          console.log(reversexArr)
          reverseArr.push.apply(reverseArr,reversexArr);
          console.log(reverseArr);
          var reverseNum = reverseArr.join("");
          
      }
      else {
    xArr=xArr.reverse();
    var reverseNum= xArr.join("");
          
      }
       if (reverseNum > 2147483647 || reverseNum < -2147483648 ){
        return 0;
      }
      else {
    return reverseNum;
  }
  }
  