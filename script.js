//A smooth effect in the navbar links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Scroll Button navigation
//To Top
function scrollToTop(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
}

//To Bottom
function scrollToBottom(){
    window.scrollTo({
        top:document.body.scrollHeight,
        behavior:'smooth'
    });
}