#!/usr/bin/env node
var fs = require('fs');
const mdlinks = require('./Pruebamd/marker');
const path = require('path');
const [,, ...args] = process.argv;
var proceso = process.cwd();
console.log(args);

// var replace = args.replace(/[]/, '');
// var replace = args.join(' ');
var reacomodando = path.win32.normalize(args[0]);
var listo = `${proceso}/${reacomodando}`;
var rereacomodando = path.win32.normalize(listo);
// // 
// // console.log(rereacomodando);
if (args[1] === '--validate') {
  fs.readFile(rereacomodando, {encoding: 'UTF-8'}, function(err, data) {
    if (err) throw err;
    console.log(mdlinks(data));
  });
} else {
  
}


