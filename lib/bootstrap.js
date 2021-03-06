(function(){
  var haml, sass, xhr;
  require.paths.unshift('http://localhost:8000/lib/');
  haml = require('haml');
  sass = require('sass');
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function onreadystatechange() {
    if (this.readyState === 4) {
      if (this.status === 200) {
        try {
          return (window.document.body.innerHTML = haml.render(this.responseText));
        } catch (error) {
          return console.log('Failed to render the haml.');
        }
      } else {
        return console.log('Failed to get the file.');
      }
    }
  };
  xhr.open('GET', '/templates/content.haml', true);
  xhr.send();
})();
