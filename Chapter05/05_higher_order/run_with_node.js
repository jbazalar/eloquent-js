// load dependencies
require("./code/load")("code/ancestry.js", "code/chapter/05_higher_order.js", "code/intro.js");

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byCent = {};
ancestry.forEach(function(person) {
	var cent = Math.ceil(person.died / 100);
	byCent[cent] = byCent[cent] || [];
	byCent[cent] = byCent[cent].concat(person.died - person.born);
});

for(key in byCent){
	console.log(key+": "+average(byCent[key]));
}