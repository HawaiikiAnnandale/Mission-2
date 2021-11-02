/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function buttonDrop() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
      const myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }
  // When the user scrolls the page, execute stickyTab
window.onscroll = function() {stickyTab()};

// Get the navbar
const navbar = document.getElementById("navbar");


// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyTab() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


//countdown
let countDownDate = new Date("Nov 28, 2021 18:00:00").getTime();

let myfunc = setInterval(function() {

    let now = new Date().getTime();
    let timeleft = countDownDate - now;

    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + "d "
    document.getElementById("hours").innerHTML = hours + "h " 
    document.getElementById("mins").innerHTML = minutes + "m " 
    document.getElementById("secs").innerHTML = seconds + "s"



    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "DROP DATE";
    }
}, 1000)

//Get the video
let video = document.getElementById("myVideo");

// Get the button
let btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myVideo() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

function logoOn() {
  document.getElementById('myimage').src = "Br3wz logo.jpg";
}
function logoOff() {
  document.getElementById('myimage').src = "logok.JPG";
}

function logoOn2() {
  document.getElementById('myimage2').src = "Br3wz logo.jpg";
}
function logoOff2() {
  document.getElementById('myimage2').src = "DSC07161.JPG";
}

const toons = ["SpongeBob", "Avatar", "Danny Phantom", "Scooby Doo", "Pokemon", "Rugrats"];

let text = "";
for (let i = 0; i < toons.length; i++) {
  text += toons[i] + "<br>";
}

document.getElementById("cartoon").innerHTML = text;