const backToTopButton = document.getElementById("back-to-top-button");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
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