#!/usr/bin/env node
var fs = require('fs');
const fetch = require('node-fetch');
const mdlinks = require('./lib/marker');
const path = require('path');
const [,, ...args] = process.argv;
var proceso = process.cwd();
// var replace = args.replace(/[]/, '');S
// var replace = args.join('/');
var reacomodando = path.win32.normalize(args[0]);

var listo = `${proceso}/${reacomodando}`;
var rereacomodando = path.win32.normalize(listo);

if (args[1] === '--validate') {
  fs.readFile(rereacomodando, {encoding: 'UTF-8'}, function(err, data) {
    if (err) throw err;
    console.log(mdlinks(data));
    // let p2 = new Promise(function(resolver, rechazar) {
    //   return resolver(mdlinks(data));
    // });
  }); 
} else {
  fs.readFile(rereacomodando, {encoding: 'UTF-8'}, function(err, data) {
    if (err) throw err;
    console.log(mdlinks(data));
    // var p1 = new Promise(function(resolve, reject) {
    //   resolve(mdlinks(data));
      
    // });

    // p1.then(function(value) {
    //   console.log(value); // Success!
    // }, function(reason) {
    //   console.log(reason); // Error!
    // }).then(function(value) {
    //   console.log(value); // Success!
    // }, function(reason) {
    //   console.log(reason); // Error!
    // })
  
  });
}
