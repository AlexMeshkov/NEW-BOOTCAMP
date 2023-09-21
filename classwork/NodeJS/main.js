const b = require('./greeting.js');

// b("Jack")

console.log("b=>", b);

b.g("ARbert");

b.h("Jereemy");


const {g,h} = require('./greeting.js');

// b("Jack")

console.log("b=>", b);

g("ARbert");

h("Jereemy");