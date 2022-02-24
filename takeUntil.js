const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  let result = [];



  for (let item of array) {
    let conditionMet = callback(item);
    if (!conditionMet) {
      result.push(item);
    } else {
      break;
    }
  }

  return result;
};

module.exports = takeUntil;