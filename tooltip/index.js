'use strict'
//uses es5

document.querySelector('button').addEventListener('keydown', function(e) {
  var tooltip = document.querySelector('[role=tooltip]');
  if (e.key.match('Esc')) { tooltip.style.opacity = '0';}
});


