#!/usr/bin/env node
var fs = require('fs');
const mdlinks = require('./Pruebamd/marker');
const path = require('path');
const [,, ...args] = process.argv;
var proceso = process.cwd();
var argumento = process.argv;

// var replace = args.replace(/[]/, '');S
var replace = args.join('/');
var reacomodando = path.win32.normalize(replace);
var listo = `${proceso}/${reacomodando}`;
var rereacomodando = path.win32.normalize(listo);
console.log(proceso);
console.log(rereacomodando);

var exam = require('./Pruebamd/readme');
fs.readFile(rereacomodando, {encoding: 'UTF-8'}, function(err, data) {
  if (err) throw err;
  console.log(mdlinks(data));
});
// const args = process.argv;
// var jsonPath = path.basename(process.argv);
// console.log(jsonPath);
// var jsonString = fs.readFileSync(jsonPath, 'utf8');
// console.log(args);
// console.log(jsonPath)
// module.exports = args;
