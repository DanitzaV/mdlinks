const fetch = require('node-fetch');
const fs = require('fs');

const Marked = require('marked');

function markdownLinkExtractor(markdown, options) {
  const links = [];
  const renderer = new Marked.Renderer();
  const promise = new Promise(function(resolve, reject) {
    fs.readFile(markdown, { encoding: 'UTF-8' }, function(err, data) {
      if (err) throw err;
      renderer.link = function(href, title, text) {
        links.push({
          href: href,
          text: text,
          title: title,
        });
      };
      // fetch(element.href).then(res=> res).ch(err=> err);

      Marked(data, { renderer: renderer });
      
      const statusok = Promise.all(links.map(url =>
        fetch(url.href).then(resp => {
          if (resp.statusText === 'OK') {
            return {
              href: url.href,
              text: url.text,
              title: url.title,
              status: resp.status,
              statusText: resp.statusText
            };
          }
        }).catch(res => {
          return {
            href: url.href,
            text: url.text,
            title: url.title,
            status: res.code,
          };
        })
      ));
      if (options.validate === true) {
        resolve(statusok);
      } else {
        resolve(links)
      } 
    });
  });
  
  return promise;
};
markdownLinkExtractor('example.md', {validate: true}).then(result => console.log(result));


// function markdownLinkExtractorvalidate(markdown) {
//   let status = {};
//   const links = [];
//   const renderer = new Marked.Renderer();

//   const promise = new Promise(function(resolve, reject) {
  
//     fs.readFile(markdown, {encoding: 'UTF-8'}, function(err, data) {
//       if (err) throw err;
//       renderer.link = function(href, title, text) {
//         links.push(href);
//       };
//       Marked(data, { renderer: renderer });
      
//       resolve(links)
//     });
    
//   });
  
//   return promise;
// };

// markdownLinkExtractorvalidate('example.md').then(result => console.log(result)).catch(err => console.log(err));


