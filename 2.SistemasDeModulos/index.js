var SerialGenerator = require('./serialGenerator.js');
var serialGeneratorA = new SerialGenerator();
var serialGeneratorB = new SerialGenerator();

console.log(serialGeneratorA === serialGeneratorB);
