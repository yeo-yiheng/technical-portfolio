let isDisabled = false;

// -------------------------- Sticky Navbar --------------------------
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".navbar");
const mask = document.querySelector(".mask");
const offset = navBar.offsetTop - 15;

function onScroll() {
    window.scrollY >= 90
        ? navBar.classList.add('sticky')
        : navBar.classList.remove('sticky');
}

document.addEventListener('scroll', onScroll);
// -------------------------- Hamburger Icon Mobile --------------------------
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    mask.classList.toggle("active");
    navBar.classList.toggle("active");
    if (isDisabled) {
        enableScrolling();
    } else {
        disableScrolling();
    }
});

document.querySelectorAll(".nav-link").forEach(n =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        mask.classList.remove("active");
        navBar.classList.remove("active");
        enableScrolling();
    }));

mask.addEventListener("click", e => {
    hamburger.click();
});
// -------------------------- Project Card --------------------------
document.querySelectorAll('.project_card_cta').forEach(cta => {
    let project = (cta.id).split('-')[1];
    if (project != undefined) {
        cta.addEventListener("click", e => {
            disableScrolling();
            const popup = document.getElementById(`${project}-content`);
            popup.style.top = window.scrollY + "px";
            popup.classList.add("active");
        });
    }
});

document.querySelectorAll(".close").forEach(closer => {
    closer.addEventListener("click", e => {
        enableScrolling();
        let project = (closer.id).split('-')[1];
        document.getElementById(`${project}-content`).classList.remove("active");
    });
});
// -------------------------- Loading Screen --------------------------
function disableScrolling() {
    document.body.classList.add('stop-scrolling');
    isDisabled = true;
}

function enableScrolling() {
    document.body.classList.remove('stop-scrolling');
    isDisabled = false;
}

const loader = document.querySelector(".loader-wrapper");
window.scrollTo(0, 0);
disableScrolling();
window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.display = 'none';
        enableScrolling();
    }, 0);
});

window.onunload = function () {
    window.scrollTo(0, 0);    
};

// -------------------------- About Buttons --------------------------
const cvButton =  document.querySelector(".cv-button");
const aResumeElem = document.querySelector(".resume-download");

cvButton.addEventListener("click", () => {
    aResumeElem.click();
});

const contactButton = document.querySelector(".contact-button");
const aContactElem = document.querySelector(".contact-link");

contactButton.addEventListener("click", () => {
    aContactElem.click();
});

const emailButton = document.querySelector(".contact_content_send_email");
const aEmailButton = document.querySelector(".contact_send_message_cta");

emailButton.addEventListener("click", () => {
    aEmailButton.click();
});

// open up form

// -------------------------- Side Panel --------------------------
const sectionNodelist = document.querySelectorAll("section");
const aboutSection = document.querySelector(".about");
aboutSection.classList.add("current");
sectionNodelist.forEach(section => {
    document.addEventListener("scroll", e => {
        let userCurrentPosition = window.scrollY;
        let sectionPosition = section.offsetTop;
        let sectionEnd = section.offsetHeight + sectionPosition;
        if (userCurrentPosition + 15 >= sectionPosition && !(userCurrentPosition > sectionEnd)) {
            let sideName = document.querySelector(`.${section.id}`);
            sideName.classList.add("current");
        } else {
            let sideName = document.querySelector(`.${section.id}`);
            sideName.classList.remove("current");
        }
    });
});
