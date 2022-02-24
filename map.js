const eqArrays = require('./eqArrays');

const assertArraysEqual = function(foo1,foo2) {

    if (eqArrays(foo1,foo2)===false) {
        return false;

    }
    return true;
}
const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      results.push(callback(item));
    }
    return results;
  }

  module.exports = map;