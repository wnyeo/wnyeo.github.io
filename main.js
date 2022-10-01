// typing effect

var i = 0;
var txt = 'analyst. developer. learner.'; 
var speed = 280;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typing").innerHTML += txt.charAt(i);
        i++;
        setInterval(typeWriter, speed);
    }
    // console.log("typing");
}

// function toTop() {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// }

// Back to top button

let mybutton = document.getElementById("topBtn");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the button is clicked, scroll to the top of the document
function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
