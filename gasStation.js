function station(arr,arr1){
    var total = 0
    var curr = 0;
    var start = 0;
for(var i = 0; i < arr.length; i++){
 total+=arr[i]-arr1[i]
 curr+=arr[i]-arr1[i]
 if(curr < 0){
    start = i+1
    curr = 0;
 }
}
return total >= 0?start:-1
}
console.log(station([1,2,3,4,5],[3,4,5,1,2]))