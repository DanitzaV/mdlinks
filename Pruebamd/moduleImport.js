const md = require('./../lib/marker');

md.mdlinks('test/juego.md').then((result) => {
  console.log(result);
});