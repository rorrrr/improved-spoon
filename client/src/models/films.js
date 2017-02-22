var Films = function(){}

Films.prototype = {
  makeRequest: function(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url)
    request.onload = callback;
    request.send();
  },

  all: function(callback) {
    this.makeRequest('http://localhost:3000/api/films', function() {
      if (this.status !== 200) return;
        var result = JSON.parse(this.responseText);

        callback(result);
    });
  }
}


module.exports = Films;