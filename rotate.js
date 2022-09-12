function rotate(mat){
    for(var i = mat[0].length-1; i >= 0; i--){
        var out= ""
        for(var j = 0; j < mat.length; j++){
            out+=mat[j][i]+" "
        }
        console.log(out)
    }

}
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))