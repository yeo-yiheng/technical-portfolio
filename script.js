// -------------------------- Sticky Navbar --------------------------
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".navbar");
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
});

document.querySelectorAll(".nav-link").forEach(n =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

// -------------------------- Project Card --------------------------
document.querySelector('.learn_travelio').addEventListener('click', () => {
    console.log(window.scrollY);
    disableScrolling();
    const popup = document.getElementById('travelio_content');
    popup.style.top = window.scrollY + "px";
    popup.classList.add("active");
});

document.querySelector('.learn_myway').addEventListener('click', () => {
    console.log(window.scrollY);
    disableScrolling();
    const popup = document.getElementById('myway_content');
    popup.style.top = window.scrollY + "px";
    popup.classList.add("active");
});

document.getElementById('close_myway').addEventListener('click', () => {
    enableScrolling();
    document.getElementById('myway_content').classList.remove("active");
});

document.getElementById('close_travelio').addEventListener('click', () => {
    enableScrolling();
    document.getElementById('travelio_content').classList.remove("active");
});

// -------------------------- Loading Screen --------------------------
function disableScrolling() {
    document.body.classList.add('stop-scrolling');
}

function enableScrolling() {
    document.body.classList.remove('stop-scrolling');
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