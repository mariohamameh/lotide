const assertEqual = require('./assertEqual');

const checkCondition = function(condition, conditionCriteria) {
  // input : a condition you want to check and the condition criteria you want to compare the condition to pass
  // output : boolean, true if condition passes criteria, false if condition fails criteria

  const conditionMet = conditionCriteria(condition);
  //conditionMet checks to see if the value of conditionToCheck meets the criteria of the condition

  return conditionMet;
};

const findKey = function(object, condition) {
  // input : an object containing many key/value pairs that need to be tested to see if it passed the condition
  // output: the first key that has a value that passes the condition
  let foundKey = "";

  for (let key in object) {
    let conditionToCheck = object[key];
    let checkedCondition = checkCondition(conditionToCheck, condition);

    if (checkedCondition) {
      foundKey = key;
      break;
    } else {
      continue;
    }
  }

  return foundKey;
};

module.exports = checkCondition, findKey;