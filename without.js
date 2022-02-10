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
const without=function(r1,itemsToRemove) {

    let result=[];
    for (let i of r1) {
        if(!itemsToRemove.includes(i)) {
            result.push(i);
        }
    }

    return result;

}

const words = ["hello", "world", "lighthouse"];
 // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(without(words, ["lighthouse"]));