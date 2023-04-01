// Set the date we're counting down to
var countDownDate = new Date("Apr 24, 2023 04:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the elements
  document.getElementById("displayText").innerText = "Honkai: Star Rail releases in";
  document.getElementById("dislpayDate").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("displayText").innerText = "Honkai: Star Rail is OUT NOW!";
    document.getElementById("dislpayDate").innerHTML = "Enjoy your time there Trailblazers";
  }
}, 1000);

// Random backgrounds
var backgrounds = [
  './img/1.png',
  './img/2.png',
  './img/3.png',
  './img/4.png',
  './img/5.png',
  './img/6.png',
  './img/7.png',
  './img/8.png',
  './img/9.png',
  './img/10.png',
  './img/11.png',
  './img/12.png',
  './img/13.png',
  './img/14.png'
];
// Chanegs background every 5 minutes
setInterval(function(){
  var randomIndex = Math.floor(Math.floor(Math.random() * 14));
  var randomBackground = backgrounds[randomIndex];
  document.getElementById('main').style.backgroundImage = 'url(' + randomBackground + ')';
  document.getElementById('body').style.backgroundImage = 'url(' + randomBackground + '), url(' + randomBackground + ')';
}, 30000);