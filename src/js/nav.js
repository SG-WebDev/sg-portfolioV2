// Navigation Variables
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll('.nav__ItemLink');
const sectionScrollOffset = 200;

//Navigation Methods
const removeAllActiveClass = () => {
    navLinks.forEach( elem => {
        elem.classList.remove('nav__ItemLink--active');
    });
};

const addNavLinksEvent = () => {
    navLinks.forEach( navLink => {
        navLink.addEventListener('click', function (e) {
            e.preventDefault();
            let target = this.getAttribute('href');
            this.classList.add('nav__ItemLink--active');
            document.querySelector(`${target}`).scrollIntoView({
                behavior: 'smooth'
            });
            return false;
        }, false);
    });
}

const addNavScrollEvent = () => {
    let currentActive = 0;
    window.addEventListener("scroll", () => {
        const currentScrolling = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionScrollOffset ) - 1;
        if (currentScrolling !== currentActive) {
            removeAllActiveClass();
            currentActive = currentScrolling;
            navLinks[currentScrolling].classList.add("nav__ItemLink--active");
        }
    });
}
const addNavDisplayEvent = () => {
    const navOpenTrigger = document.querySelector('.navTrigger--open');
    const navCloseTrigger = document.querySelector('.navTrigger--close');
    const navPanel = document.querySelector('.nav');

    navOpenTrigger.addEventListener('click', function (e) {
        navPanel.classList.add('nav--open');
        navPanel.style.zIndex = "2";
        navPanel.style.opacity = "1";
    }, false);

    navCloseTrigger.addEventListener('click', function (e) {
        navPanel.classList.remove('nav--open');
        setTimeout(function () {
            navPanel.style.zIndex = null;
            navPanel.style.opacity = null;
        },500)
    }, false);
}

// Methods Inits
addNavLinksEvent();
addNavScrollEvent();
addNavDisplayEvent();


