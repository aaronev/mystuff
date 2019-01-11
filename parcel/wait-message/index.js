console.log("hello")
// var Alert;

// document.getElementById("continue").addEventListener("click", function() { Alert.close() });
// document.querySelector("button").addEventListener("click", function() {
//   Alert = new AlertBoxOverlay(
//     document.querySelector("input[name='image']:checked").value,
//     document.querySelector("input[name='animate']:checked").value,
//     document.querySelector("input[name='text']:checked").value,
//     document.querySelector("input[name='button']:checked").value,
//     10
//   );
// })

// function AlertBoxOverlay(img, animate, text, button seconds) {
//   var message = this;
//   var alert = document.getElementById("alert-box");
//   var overlay = document.getElementById("overlay");
//   var continueButton = document.getElementById("continue");
//   var vizText = document.getElementById("visual-text");
//   var indefAnim = document.getElementById("indef-animation");
//   var audioAnnounce = document.getElementById("live-region");
//   var barDef = document.getElementById("bar-definite");
//   var spinDef = document.getElementById("spin-definite");
//   var isSpinner = (img === "spin");
//   var isIndefinite = (animate === "indefinite");
//   var hasButton = (button === "yes");
//   var counter = 0;

//   //to set interval & prevent set interval from executing function
//   var timedMessage = setInterval(setTime, 1000)

//   //initial text once alert wait message renders
//   if (text === "load") {
//     vizText.innerHTML = ("0% Loading...");
//   } else if (text === "untimed") {
//     vizText.innerHTML = "Please wait...";
//   } else {
//     vizText.innerHTML = seconds + " seconds";
//   }

//   //adds button to wait message
//   if (hasButton) continueButton.removeAttribute("hidden");

//   //renders the entire alert wait message box
//   overlay.className="overlay";
//   overlay.setAttribute("disabled", "");
//   alertBox.removeAttribute("hidden");

//   //syncs animation and time
//   function setTime() {
//     if (counter <= seconds) { 

//       //for visual text message to be updated
//       var countDown = seconds-counter + " seconds";
//       var loadPercent = Math.round((counter/seconds)*100) + "% Loading..."
//       var pleaseWait = "Please wait...";

//       if (text === "load") {
//         vizText.innerHTML = loadPercent
//       } else if (text === "untimed") {
//         vizText.innerHTML = pleaseWait
//       } else {
//         vizText.innerHTML = countDown;
//       }

//       //for progress bar definite animation
//       barDef.style.width = (counter/seconds)*100 + "%";

//       //for spinner definite animation and live region
//       if (counter <= 0) {

//       }
//       if (counter === Math.round(seconds*.25)) {

//       }
//       if (counter === Math.round(seconds*.5)) {
        
//       }
//       if (counter === Math.round(seconds*.75)) {
        
//       }
//       if (counter >= seconds) {
        
//       }
//     }
//   }
// }
