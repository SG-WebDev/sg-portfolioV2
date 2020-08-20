// Navigation Menu
const navLinks = document.querySelectorAll('.nav__ItemLink');
navLinks.forEach( navLink => {
    navLink.addEventListener('click', function (e) {
        e.preventDefault();
        let target = this.getAttribute('href');
        console.log(target);
        navLinks.forEach( elem => {
            elem.classList.remove('nav__ItemLink--active');
        });
        this.classList.add('nav__ItemLink--active');
        document.querySelector(`${target}`).scrollIntoView({
            behavior: 'smooth'
        });
        return false;
    }, false);
});

// Navigation Panel Trigger
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