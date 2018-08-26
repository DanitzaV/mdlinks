#!/usr/bin/env node
var mdlinks = require('./Pruebamd/marker');
fs.readFile('example.md', {encoding: 'UTF-8'}, function(err, data) {
  if (err) throw err;
  console.log(mdlinks(readme));
});
