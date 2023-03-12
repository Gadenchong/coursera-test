
(function (window) {
  var speak = "Hi ";
  var hiSpeaker = function (name) {
    console.log(speak + "" + name);
  }
  window.hiSpeaker = hiSpeaker;

})(window);
