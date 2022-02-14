const assertEqual = function(actual, expected) {

    if(actual===expected) {
        console.log(`assertion passed: ${actual} does equal ${expected}`);
    } else {
        console.log(`assertion failed: ${actual} does not eqaul ${expected}`);
    }

};

const countLetters = function(sentence) {
    let result = {};

    sentence.split(' ').forEach(function(e) {
        result[e] = {};
        e.split('').forEach(function(c) {
            if(!result[e][c]) { result[e][c]=0; }
            result[e][c]++;
        });
    });

    console.log(result);
    return result;

}

countLetters("LHL");
countLetters("Mario");



