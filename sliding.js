function sliding(arr,k){
for(var i = 0; i <= arr.length-k; i++){
    var out = []
    max = arr[i]
    for(var j = 0; j < k; j++){
        out.push(arr[i+j])
   if(arr[i+j] > max){
    max = arr[i+j]
   }
    }
    console.log(max,out)
}
}
console.log(sliding([1,2,3,1,4,5],3))


function another(arr,k){
for(var i = 0; i <= arr.length-k; i++){
    var out1 = []
    max = arr[i]
    for(var j = 0; j < k; j++){
        out1.push(arr[i+j])
        if(arr[i+j] > max){
            max = arr[i+j]
        }

    }
    console.log(out1,max)
}

}
console.log(another([1,3,3,1,4,5],4))