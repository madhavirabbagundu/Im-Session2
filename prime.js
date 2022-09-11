function prime(n){
    var count = 0;
for(var i = 2; i <= n; i++){
    if(n%i===0){
        count++
    }
}
// return count
if(count === 1){
return "prime "
}
else{
    return "not prime"
}
}
console.log(prime(2))