const backToTopButton = document.getElementById("back-to-top-button");
let i = 0;

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
        backToTopButton.style.display = "block";
        backToTopButton.style.opacity = i/10;
        i++;
    } else {
        backToTopButton.style.display = "none";
        backToTopButton.style.opacity = 0;
        i = 0;
    }
}

function toTopScroll() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

function landingArrowScroll() {
    document.getElementById('about').scrollIntoView({
        behavior: 'smooth'
    })
}

function therapistsScroll() {
    document.getElementById('therapists').scrollIntoView({
        behavior: 'smooth'
    })
}

function servicesScroll() {
    document.getElementById('services').scrollIntoView({
        behavior: 'smooth'
    })
}

function bookingScroll() {
    document.getElementById('booking').scrollIntoView({
        behavior: 'smooth'
    })
}