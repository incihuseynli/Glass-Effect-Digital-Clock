let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");

setInterval(() => {
  let currentTime = new Date();
  hrs.innerHTML =
    // If number less than ten clock will show "0" in front.
    (currentTime.getHours() < 10 ? "0" : "") + 
    currentTime.getHours();
  mins.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + 
    currentTime.getMinutes();
  secs.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + 
    currentTime.getSeconds();
}, 1000);
