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
gsap.fromTo(logoSPath, 3, {strokeDashoffset:logoSPathLength}, {strokeDashoffset:0, delay: 1});
gsap.fromTo(logoGPath, 3, {strokeDashoffset:logoGPathLength}, {strokeDashoffset:0, delay: 1});
gsap.to(logoSPath, {fillOpacity: 1, duration: 1, delay: 4});
gsap.to(logoGPath, {fillOpacity: 1, duration: 1, delay: 4});
