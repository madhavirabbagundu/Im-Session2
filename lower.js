function lower(arr,k){
var i = 0;
var j = arr.length-1
var ans = -1
while(i <= j){
    var mid = i+Math.floor((j-i)/2)
    if(arr[mid] === k){
        ans = mid
        j = mid-1
    }
    else if(arr[mid] > k){
        j = mid-1
    }
    else{
        i = mid+1
    }
}
return ans
}
// console.log(lower([0,1,1,2,2],1))

function upper(arr1,k1){
    var i = 0;
    var j = arr1.length-1
    var ans1 = 0
    while(i <= j){
        var mid = i+Math.floor((j-i)/2)
        if(arr1[mid] === k1){
            ans1 = mid
            i = mid+1
        }
        else if(arr1[mid] > k1){
            j = mid-1
        }
        else{
            i = mid+1
        }
    }
    return ans1
}
// console.log(upper([1,1,1,2,2],1))

function both(){
    var first = lower([1,1,1,2,2],1)
    var second = upper([1,1,1,2,2],1)
    console.log(second-first+1,first,second)

}
both()