'use strict'
//uses es5

Array.prototype.slice.call(document.querySelectorAll('button')).forEach(function(el){
  var tooltip = el.nextElementSibling;

  document.onmouseover = function(e) {
    document.elementFromPoint(e.clientX, e.clientY).addEventListener('keydown', escDismissTooltip);
  };

  el.addEventListener('keydown', escDismissTooltip);
  el.addEventListener('blur', resetTooltip);
  el.addEventListener('mouseout', resetTooltip);
  
  function escDismissTooltip(e) {
    if (e.key.match('Esc')) { 
      tooltip.setAttribute('hidden', '')
    }
  };
  
  function resetTooltip() {
    tooltip.removeAttribute('hidden', '')
  };

});
