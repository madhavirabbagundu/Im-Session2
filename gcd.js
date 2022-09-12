function gcd(n,m){
    var out = []
    var count = 0;
for(var i = 2; i < m; i++){
    if(n%i === 0 && m%i === 0){
     console.log(i)
     out.push(i)
    }
     if(n%i === 0){
        console.log(i)
        // out.push(i)


    }
     if(m%i === 0){
        console.log(i)
        // out.push(i)

    }
}
return out

}
console.log(gcd(10,6))