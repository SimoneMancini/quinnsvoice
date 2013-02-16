$(document).ready(function() {

  // http://stackoverflow.com/questions/8965651/cycle-through-divs
  // http://jsfiddle.net/eFjnU/
  var divs = $('strong[id^="word-"]').hide(),
      i = 0;

  (function cycle() {

      divs.eq(i).fadeIn(400)
                .delay(1500)
                .fadeOut(400, cycle);

      i = ++i % divs.length;

  })();

});
