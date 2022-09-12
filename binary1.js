function binary(arr,k,k1,k2){
var i = 0;
var j = arr.length-1
var count = 0
var count1 = 0
var count2 = 0
while(i <= j){
    var mid = Math.floor((i+j)/2)
    if(arr[mid] === k1){
        count++
        i++
        j++
    }
    else if(arr[mid] > k1){
        j = mid-1
    }
    else {
        i = mid+1
    }

    // two 
    

}
console.log(count)
}
console.log(binary([1,3,3,4,5,6,7,7,8,9],3,7,11))