function smaller(arr){
for(var i = 0; i < arr.length; i++){
for(var j = i+1; j < arr.length; j++){
    if(arr[i] < arr[j]){
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    }
}
}
return arr.reverse()
}
console.log(smaller([0,1,2,0,1,2]))