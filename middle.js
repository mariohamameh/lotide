const eqArrays=function(ar1,ar2) {
    if(ar1.length!==ar2.length) {
        return false;
    }
    for (let i=0;i<ar1.length;i++) {

        if (ar1[i]!==ar2[i]) {

            return false;
        }
    }
    return true;

}

const assertArraysEqual = function(foo1,foo2) {

    if (eqArrays(foo1,foo2)===false) {
        return false;

    }
    return true;
}


const middle=function(array) {
    let result=[];
    if (array.length<=2) {
        return result ;

    }
    let i =array.length/2;
    
    if ((array.length%2)===0) {            
        result.push(array[i-1]);
        result.push(array[i]); 
 
        return result;      
    }
    else {
             //console.log(array.length,"array.length");
            // console.log(array.length/2,"array.length/2");
            // console.log(array[i],"array[i]");
            // console.log(Math.floor(array[i]),"Math.floor(array[i])");
            
        result.push(array[Math.floor(i)]);
        return result;
    } 
    

}

//test cases
//console.log(middle([1])) // => []
//console.log(middle([1, 2])) // => []
//console.log(middle([1, 2, 3])) // => [2]
//console.log(middle([1, 2, 3, 4, 5])) // => [3]
//console.log(middle([1, 2, 3, 4]))// => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]