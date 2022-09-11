function anagram(str,str1){
    if(str.length!==str1.length){
        return false
    }
    str = str.trim().split("").sort()
    str1 = str1.trim().split("").sort()
    console.log(str,str1)
    for(var i = 0; i < str.length; i++){
        if(str[i] === str1[i]){
            return true
        }
    }
    return false
}
console.log(anagram("listen","silnt"))