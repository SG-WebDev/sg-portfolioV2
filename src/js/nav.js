// Navigation Variables
const body = document.querySelector('body');
const sections = document.querySelectorAll('.section');
const navPanel = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__ItemLink');
const navTrigger = document.querySelector('.navTrigger');
const sectionScrollOffset = 300;

// Navigation Methods
const removeAllActiveClass = () => {
    navLinks.forEach( elem => {
        elem.classList.remove('nav__ItemLink--active');
    });
};

const disableScrolling = () => {
    const scrollbarWidth = window.innerWidth - document.body.clientWidth;
    body.classList.add('no-scroll');
    body.style.marginRight = `${scrollbarWidth}px`;
};

const enableScrolling = () => {
    body.classList.remove('no-scroll');
    body.style.marginRight = '0';
};

const showNavPanel = () => {
    navPanel.classList.add('nav--open');
    navTrigger.classList.remove("navTrigger--open");
    navTrigger.classList.add("navTrigger--close");
    navPanel.style.zIndex = '2';
    navPanel.style.opacity = '1';
    disableScrolling();
};

const hideNavPanel = () => {
    navPanel.classList.remove('nav--open');
    navTrigger.classList.remove("navTrigger--close");
    navTrigger.classList.add("navTrigger--open");
    enableScrolling();
    setTimeout(function () {
        navPanel.style.zIndex = null;
        navPanel.style.opacity = null;
    },750);
};

const addNavLinksEvent = () => {
    navLinks.forEach( navLink => {
        navLink.addEventListener('click', function(e) {
            e.preventDefault();
            let target = this.getAttribute('href');
            this.classList.add('nav__ItemLink--active');
            navTriggerToggle.reverse();
            hideNavPanel();
            setTimeout(function () {
                document.querySelector(`${target}`).scrollIntoView({
                    behavior: 'smooth'
                });
            },375)
            return false;
        }, false);
    });
}

const addNavScrollEvent = () => {
    let currentActive = 0;
    window.addEventListener('scroll', () => {
        const currentScrolling = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionScrollOffset ) - 1;
        if (currentScrolling !== currentActive) {
            removeAllActiveClass();
            currentActive = currentScrolling;
            navLinks[currentScrolling].classList.add('nav__ItemLink--active');
        }
    });
}

const addNavDisplayEvent = () => {
    navTrigger.addEventListener('click',  () => {
        if(navTrigger.classList.contains("navTrigger--open")) {
            showNavPanel();
        }
        else {
            hideNavPanel();
        }
    }, false);
}

// Methods Inits
addNavLinksEvent();
addNavScrollEvent();
addNavDisplayEvent();