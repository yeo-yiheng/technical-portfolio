const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".navbar");
const offset = navBar.offsetTop - 15;

function onScroll() {
    window.scrollY >= offset
        ? navBar.classList.add('sticky')
        : navBar.classList.remove('sticky');
}

document.addEventListener('scroll', onScroll);

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

document.getElementById('learn_travelio').addEventListener('click', () => {
    console.log(window.scrollY);
    disableScrolling();
    const popup = document.getElementById('travelio_content');
    popup.style.top = window.scrollY + "px";
    popup.classList.add("active");
});

document.getElementById('learn_myway').addEventListener('click', () => {
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
    }, 2000);
});

window.onunload = function () {
    window.scrollTo(0, 0);    
};