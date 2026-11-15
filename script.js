// =========================
// MOBILE MENU
// =========================

function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");

    navLinks.classList.toggle("active");
}


// =========================
// CLOSE MOBILE MENU
// WHEN LINK IS CLICKED
// =========================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        document
            .querySelector(".nav-links")
            .classList.remove("active");

    });

});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = contactForm
            .querySelector('input[type="text"]')
            .value;

        const email = contactForm
            .querySelector('input[type="email"]')
            .value;

        const message = contactForm
            .querySelector("textarea")
            .value;

        if (!name || !email || !message) {

            alert("Please fill all fields.");

            return;
        }

        alert(
            "Thank you " +
            name +
            "! Your message has been received."
        );

        contactForm.reset();

    });

}


// =========================
// CURRENT YEAR
// =========================

const yearElement = document.querySelector(".copyright");

if (yearElement) {

    const currentYear = new Date().getFullYear();

    yearElement.innerHTML =
        "© " +
        currentYear +
        " Arvind Kumar. All Rights Reserved.";

}


// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(
    ".section-title, .skill-card, .project-card, .timeline-item, .certificate-card"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    observer.observe(element);

});
