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
    const currentUrl = window.location.href.split("#")[0];

    document.getElementById('about').scrollIntoView({
        behavior: 'smooth'
    })

    window.history.pushState("", "/services", `${currentUrl}#about`);
}

function therapistsScroll() {
    const currentUrl = window.location.href.split("#")[0];

    document.getElementById('therapists').scrollIntoView({
        behavior: 'smooth'
    })

    window.history.pushState("", "/services", `${currentUrl}#therapists`);
}

function servicesScroll() {
    const currentUrl = window.location.href.split("#")[0];

    document.getElementById('services').scrollIntoView({
        behavior: 'smooth'
    })

    window.history.pushState("", "/services", `${currentUrl}#services`);
}

function bookingScroll() {
    const currentUrl = window.location.href.split("#")[0];

    document.getElementById('booking').scrollIntoView({
        behavior: 'smooth'
    })

    window.history.pushState("", "/services", `${currentUrl}#booking`);
}

function therapistChange() {
    const dropdown = $('#q3-dropdown');
    const datepicker = $("#q6-datepicker");
    const date = new Date();
	const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    datepicker.datepicker("destroy");

    if(dropdown.val() === "q3-1") {
        datepicker.datepicker({
            format: "dd.mm.yyyy",
            todayBtn: "linked",
            minDate: today,
            language: "en",

            beforeShowDay: function (d) {
                const day = d.getDay();
                return [(day !== 0 && day !== 2 && day !== 4 && day !== 5 && day !== 6)];
            }
        })
    } else if (dropdown.val() === "q3-2") {
        datepicker.datepicker({
            format: "dd.mm.yyyy",
            todayBtn: "linked",
            minDate: today,
            language: "en",

            beforeShowDay: function (d) {
                const day = d.getDay();
                return [(day !== 0 && day !== 1 && day !== 3 && day !== 5 && day !== 6)];
            }
        })
    } else if (dropdown.val() === "q3-3") {
        datepicker.datepicker({
            format: "dd.mm.yyyy",
            todayBtn: "linked",
            minDate: today,
            language: "en",

            beforeShowDay: function (d) {
                const day = d.getDay();
                return [(day !== 0 && day !== 1 && day !== 2 && day !== 3 && day !== 4 && day !== 6)];
            }
        })
    }
}
