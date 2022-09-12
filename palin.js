function palindrome(str){
    var out = ""
for(var i = str.length-1; i >= 0; i--){
out+=str[i]
}
// return out
if(out === str){
    return "palindrome"
}
else{
    return "non palindrome"
}
}
console.log(palindrome("abcd"))