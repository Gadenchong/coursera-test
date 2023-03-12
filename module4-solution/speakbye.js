
(function (window) {
  var speak = "Bye ";
  var byeSpeaker = function (name) {
    console.log(speak + "" + name);
  }
  window.byeSpeaker = byeSpeaker;

})(window);