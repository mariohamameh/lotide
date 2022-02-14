const eqArrays = require('./eqArrays');

const assertArraysEqual = function(foo1,foo2) {

    if (eqArrays(foo1,foo2)===false) {
        return false;

    }
    return true;
}


//Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

module.exports = assertArraysEqual;