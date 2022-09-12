function diff(arr,k){
    var i = 0;
    var j = arr.length-1
    while(i < j){
        if(arr[j]+arr[i] === k){
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
console.log(diff([1,2,8,15],9))