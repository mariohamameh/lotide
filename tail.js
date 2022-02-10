const assertEqual = function(actual, expected) {

    if(actual===expected) {
        console.log(`assertion passed: ${actual} does equal ${expected}`);
    } else {
        console.log(`assertion failed: ${actual} does not eqaul ${expected}`);
    }

};

const tail = function(bar) {
    for (let i = 1;i<=bar.length;i++) {

        return bar[i];
    } 

}
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
