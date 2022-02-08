const assertEqual = function(actual, expected) {

    if(actual===expected) {
        console.log(`assertion passed: ${actual} does equal ${expected}`);
    } else {
        console.log(`assertion failed: ${actual} does not eqaul ${expected}`);
    }

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);