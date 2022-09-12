function sorting(arr,k){
var i = 0;
var j = arr.length-1
while(i < j){
    if(arr[i]+arr[j] === k){
        return [i,j]

    }
    else if(arr[i]+arr[j] > k){
        j--
    }
    else{
        i++
    }
}

}
console.log(sorting([0,7,8,9],9))