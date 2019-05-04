'use strict'
//uses es5

document.querySelector('button').addEventListener('click' Tooltip);

function Tooltip(e) {
  var el = e.target;

  var tooltip = (function() {
    var tltip = document.createElement('span');
    tltip.setAttribute('role', 'tooltip');
    tltip.innerText = 'testing'
    return tltip;
  })();

  // to help hover from tigger to tooltip without dissappearing
  var balloon = (function() { 
    var balloon = document.createElement('div');
    balloon.classList.add('tooltip');
    balloon.appendChild('tooltip');
  })();

  function open() {
    // delay open 4 seconds
    setTimeout(function() {
      el.parentNode.appendChild('balloon');
    }, 4000);
  };

  function close() {
    el.parentNode.removeChild('balloon');
  };

  el.addEventListener('focus', open);
  el.addEventListener('mouseover', open);

  el.addEventListener('blur', close);
  el.addEventListener('mouseout', close);
}