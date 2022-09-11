function power(n){
    var count = 0
while( n > 0){
    if(n%2===1)
        count++
        n = n/2
    
}
return count == 1
}
console.log(power(12))