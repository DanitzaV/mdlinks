#!/usr/bin/env node
var fs = require('fs');
const mdlinks = require('./Pruebamd/marker');
const path = require('path');
const [,, ...args] = process.argv;
var proceso = process.cwd();

// var replace = args.replace(/[]/, '');S
var replace = args.join('/');
var reacomodando = path.win32.normalize(replace);
var listo = `${proceso}/${reacomodando}`;
var rereacomodando = path.win32.normalize(listo);
// console.log(proceso);
// console.log(rereacomodando);
fs.readFile(rereacomodando, {encoding: 'UTF-8'}, function(err, data) {
  if (err) throw err;
  console.log(mdlinks(data));
});
