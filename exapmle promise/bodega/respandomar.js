// Es necesario que instales marked como dependencia de tu proyecto

// npm install --save marked
const Marked = require('marked');

// var readmes = require('./readme');
// var modelo = require('../index');

// Función necesaria para extraer los links usando marked
// (tomada desde biblioteca del mismo nombre y modificada para el ejercicio)
// Recibe texto en markdown y retorna sus links en un arreglo
module.exports = function markdownLinkExtractor(markdown, validate) {
 
  if (validate.validate === true) {
    console.log('valido se se');
  } else {
    console.log('oh no ');
  }
  const links = []; 
  

  const renderer = new Marked.Renderer();

  // Taken from https://github.com/markedjs/marked/issues/1279
  const linkWithImageSizeSupport = /^!?\[((?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?)\]\(\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f()\\]*\)|[^\s\x00-\x1f()\\])*?(?:\s+=(?:[\w%]+)?x(?:[\w%]+)?)?)(?:\s+("(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)))?\s*\)/;
 
  Marked.InlineLexer.rules.normal.link = linkWithImageSizeSupport;
  Marked.InlineLexer.rules.gfm.link = linkWithImageSizeSupport;
  Marked.InlineLexer.rules.breaks.link = linkWithImageSizeSupport;
  
  renderer.link = function(href, title, text) {
    
    links.push({
      href: href,
      text: text,
      title: title,
    });
  };

  Marked(markdown, { renderer: renderer });
  return links;
};