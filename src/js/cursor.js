const isDesktop = Math.min(window.screen.width, window.screen.height) >= 768 || navigator.userAgent.indexOf('Mobi') <= -1;
const hoverElements = [
    ".navTrigger",
    ".nav__LangItem",
    ".nav__Item",
    ".section__PageTrigger",
    ".portfolioList__Item",
    ".contact__Email",
    ".footer__IconWrapper"
];
if(isDesktop) {
    motionPointerInit(hoverElements);
}
