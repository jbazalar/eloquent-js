// Run this with $prompt> node <thisfile>.js

// load dependencies
require("./code/load")("code/ancestry.js", "code/chapter/05_higher_order.js", "code/intro.js");

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var ages = ancestry.filter(function(person) {
  return byName[person.mother] != null;
}).map(function(person) {
  return person.born - byName[person.mother].born;
});
console.log(average(ages));