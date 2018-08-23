#!/usr/bin/env node
var fs = require('fs');
// const [,, ... args] = process.argv;
const path = require('path');
var exam = require('./Pruebamd/readme');
fs.readFile('example.md', {encoding: 'UTF-8'}, function(err, data) {
  if (err) throw err;
  console.log(data);
});
const args = process.argv;

console.log(process.cwd());

// var jsonPath = path.basename(process.argv);
// console.log(jsonPath);
// var jsonString = fs.readFileSync(jsonPath, 'utf8');
console.log(args);
// console.log(jsonPath)
module.exports = args;
