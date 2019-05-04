'use strict'
//uses es5




// document.querySelector('[role=tooltip]').addEventListener('keydown', escDismissTooltip);

Array.prototype.slice.call(document.querySelectorAll('button')).forEach(function(el){
  var tooltip = el.nextElementSibling;

  document.onmouseover = function(e) {
    document.elementFromPoint(e.clientX, e.clientY).addEventListener('keydown', escDismissTooltip);
  };

  el.addEventListener('keydown', escDismissTooltip);
  el.addEventListener('blur', resetTooltip);
  el.addEventListener('mouseout', resetTooltip);

  function escDismissTooltip(e) {  // overwrites css
    if (e.key.match('Esc')) { tooltip.style.opacity = '0'; }
  };

  // reset to css default
  function resetTooltip() { 
    tooltip.style.opacity = '';
  };
});

// (function() { //track mouse 
//     document.onmousemove = handleMouseMove;
//     function handleMouseMove(event) {
//         var eventDoc, doc, body;

//         event = event || window.event; // IE-ism

//         // If pageX/Y aren't available and clientX/Y are,
//         // calculate pageX/Y - logic taken from jQuery.
//         // (This is to support old IE)
//         if (event.pageX == null && event.clientX != null) {
//             eventDoc = (event.target && event.target.ownerDocument) || document;
//             doc = eventDoc.documentElement;
//             body = eventDoc.body;

//             event.pageX = event.clientX +
//               (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
//               (doc && doc.clientLeft || body && body.clientLeft || 0);
//             event.pageY = event.clientY +
//               (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
//               (doc && doc.clientTop  || body && body.clientTop  || 0 );
//         }

//         // Use event.pageX / event.pageY here
//     }
// })();