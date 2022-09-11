function duplicate(arr){
    var sum = 0;
    var sum1 = 0
for(var i = 0; i < arr.length; i++){
     sum +=arr[i]
}
  var sum1 = (arr.length* (arr.length+1))/2
    

return (sum1-sum)
}
console.log(duplicate([1,3,3,2,4]))