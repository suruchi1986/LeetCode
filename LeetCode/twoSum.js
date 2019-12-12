var twoSum = function(myArr, target) {
    var len= myArr.length;
    console.log(len)
    for (let i=0;i<len;i++){
      for (let j=i+1;j<len;j++){
       if (target==myArr[i]+myArr[j]){
         console.log [i,j]
       }
      }
    }
      console.log("not found");
    
}

  
twoSum([2, 7, 11, 15],9)