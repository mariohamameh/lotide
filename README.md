# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mariohamameh/lotide`

**Require it:**

`const _ = require('@mariohamameh/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head :function (foo) {
    return foo[0];
}
* tail : function (bar) {
    let result =[];
    for (let i = 1; i < bar.length; i++) {

         result += bar[i];
    } 
    return result;
}
* middle :function (array) {
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
        result.push(array[Math.floor(i)]);
        return result;
    } 
    
}   
* assertEqual : function (actual, expected) {
    if(actual===expected) {
        console.log(`assertion passed: ${actual} does equal ${expected}`);
    } else {
        console.log(`assertion failed: ${actual} does not equal ${expected}`);
    }
}
* eqArrays : function (ar1, ar2) {
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