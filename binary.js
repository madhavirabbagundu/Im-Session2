function binary(arr,k){
var i = 0;
 var j = arr.length-1
while(i <= j){
    var mid = Math.floor((j+i)/2)
    // console.log(mid)
    if(arr[mid] === k){
        return true
    }
    else if(arr[mid] < k){
         i = mid+1
    }
    else{
        j = mid-1
    }
}
return false
}
console.log(binary([1,2,4,7],7))