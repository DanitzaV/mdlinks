#!/usr/bin/env node
// cli.js
var fs = require('fs');
const fetch = require('node-fetch');
const mdlinks = require('./Pruebamd/marker');
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
    let p2 = new Promise(function(resolver, rechazar) {
      resolver(mdlinks(data));
    });
    
    p2.then(function(valor) {
      return valor; // 1, 
    }).then(function(value) {
      let arreglo = [];
      for (let i = 0; i < value.length; i++) {
        arreglo.push(value[i]);
      }
      // console.log(arreglo);
      let validate = [];
      arreglo.forEach(element => {
        fetch(element.href).then(result => {
          if (result.ok) {
            validate.push({
              href: element.href,
              text: element.text,
              title: element.title,
              status: result.status,
              ok: 'ok :D'
            });
            console.log(validate);
          }
        }).catch(error => {
          if (error.code === undefined) {
            validate.push({
              href: element.href,
              text: element.text,
              title: element.title,
              status: 'no es un url, invalida',
              ok: 'no ok'
            });
            // console.log('no es un url, invalida')
          } else {
            validate.push({
              href: element.href,
              text: element.text,
              title: element.title,
              status: 'ruta invalida',
              ok: 'no ok'
            });
            // console.error('ruta invalida');
          }
          
        });
      
      // 2- Este uso síncrono es prácticamente inútil
      });
      
    });
    
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