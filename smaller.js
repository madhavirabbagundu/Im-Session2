function smaller(arr){
    var out = [-1]
for(var i = 1; i < arr.length; i++){
    for(var j = i-1; j >= 0; j--){
        if(arr[j] < arr[i]){
            out.push(arr[j])
            break;
        }
    }
    if(j === -1){
        out.push(-1)
    }
    
}
return out
}
console.log(smaller([1,2,5,3,5]))