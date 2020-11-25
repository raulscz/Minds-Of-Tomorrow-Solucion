// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("nav").style.backgroundColor = "rgba(255,255,255,0.5)";
        document.getElementById("nav").style.backdropFilter = "blur(10px)";
    } else {
        document.getElementById("nav").style.backgroundColor = "rgba(0,0,0,0.0)";
    }
}