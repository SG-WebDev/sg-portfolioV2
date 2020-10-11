//entry lines animation
gsap.from("#entryLeftLine_1", {scaleY: 0, duration: 0.5,});
gsap.from("#entryLeftLine_2", {scaleY: 0, duration: 0.5, delay: 0.5});
gsap.from("#entryLeftLine_3", {scaleY: 0, duration: 0.5, delay: 1});
gsap.from("#entryRightLine_1", {scaleY: 0, duration: 0.5});
gsap.from("#entryRightLine_2", {scaleY: 0, duration: 0.5, delay: 0.5});
gsap.from("#entryRightLine_3", {scaleY: 0, duration: 0.5, delay: 1});

//logo animation
const logoSPath = document.querySelector('#logoSVG_S');
const logoGPath = document.querySelector('#logoSVG_G');
const logoSPathLength = logoSPath.getTotalLength();
const logoGPathLength = logoGPath.getTotalLength();
gsap.set(logoSPath, {strokeDasharray: logoSPathLength});
gsap.set(logoGPath, {strokeDasharray: logoGPathLength});
gsap.fromTo(logoSPath, 2, {strokeDashoffset:logoSPathLength}, {strokeDashoffset:0});
gsap.fromTo(logoGPath, 2, {strokeDashoffset:logoGPathLength}, {strokeDashoffset:0});
gsap.to(logoSPath, {fillOpacity: 1, duration: 1, delay: 2});
gsap.to(logoGPath, {fillOpacity: 1, duration: 1, delay: 2});

//scroll trigger animation
const contentSections = document.querySelectorAll('.section');
ScrollTrigger.matchMedia({
    // desktop
    "(min-width: 992px)": function() {
        contentSections.forEach(section => {
            console.log(section.id);
            gsap.fromTo(`#${section.id} .section__Column`, {y: '+=200', opacity: 0}, {y: 0, opacity: 1, stagger: 0.25, duration: 1, ease: 'easeInOut',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 25%',
                }});
        });
    },
    // mobile
    "(max-width: 991px)": function() {
        contentSections.forEach(section => {
            console.log(section.id);
            gsap.fromTo(`#${section.id} .section__Column`, {y: '+=100', opacity: 0}, {y: 0, opacity: 1, stagger: 0.25, duration: 1, ease: 'easeInOut',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 75%',
                }});
        });
    },
});