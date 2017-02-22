var Films = require('../models/films');

var UI = function() {
  var films = new Films();
  films.all(function(result) {
    this.render(result);
  }.bind(this));
}


UI.prototype = {
  createText: function(text, label) {
    var p = document.createElement('p');
    p.innerText = label + text;
    return p;
  },

  appendText: function(element, text, label) {
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  render: function(films) {
    var container = document.getElementById('airbud hits');

    for (var film of films) {
      var li = document.createElement('li');
      var img = document.createElement('img')


      this.appendText(li, film.title, '');
      this.appendText(li, film.sport, 'SPORT: ');
      img.src = film.image;

      
      container.appendChild(li);
      container.appendChild(img)
    }
  }


}

module.exports = UI;
