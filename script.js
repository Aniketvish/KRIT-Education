let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header ul li a');

window.onscroll = () => {
    sections.forEach(sect => {
        let top = window.scrollY;
        let offset = sect.offsetTop - 150;
        let height = sect.offsetHeight;
        let id = sect.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header ul li a[href*=' + id + ']').classList.add('active');
        }
    });
};

function scrollToContact() {
    const contactSection = document.getElementById('contact');
    
    if (contactSection) {
        // Calculate the target scroll position (including any header height if needed)
        const offset = contactSection.offsetTop; // You can adjust this value as needed
        
        // Use the smooth scroll behavior for a smooth scrolling effect
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const infoElement = document.querySelector(".info");
    infoElement.classList.add("animate-info");
});


//-------image animation js
document.addEventListener("DOMContentLoaded", function() {
    const pic = document.querySelector(".pic");

    // Add the zoom class to the image initially for the animation on page load
    pic.classList.add("zoom");

    // Remove the zoom class after the animation is completed
    pic.addEventListener("transitionend", function() {
        pic.classList.remove("zoom");
    });

    // Add the zoom class when the page is scrolled
    window.addEventListener("scroll", function() {
        pic.classList.add("zoom");
    });
});

  