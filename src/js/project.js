const projectTemplate = document.querySelector('#projectView');
const portfolioItems = document.querySelectorAll('.portfolioList__Item');
const projectCloseTrigger = document.querySelectorAll('.project__CloseButton');

async function loadPortfolioData() {
    let response = await fetch('https://sgrobelny.dev/assets/data/portfolio.json');
    return await response.json();
}

//Portfolio view methods
let projectsData;
loadPortfolioData()
    .then(data => {
        projectsData = data;
    })
    .catch((error) => {
        console.log('Cannot load project data');
    });

const showProjectTemplate = () => {
    projectTemplate.classList.add('project--show');
    projectTemplate.style.zIndex = '3';
    projectTemplate.style.opacity = '1';
    disableScrolling();
};

const hideProjectTemplate = () => {
    projectTemplate.classList.remove('project--show');
    enableScrolling();
    setTimeout(function () {
        projectTemplate.style.zIndex = null;
        projectTemplate.style.opacity = null;
    }, 750);
};

function addExternalLink(url, type, iconName) {
    let linkHTML =
        `<a class="project__Link" href="${url}" target="_blank" rel="noopener noreferrer">
            <img class="project__LinkImg" src="./assets/img/${iconName}.svg" alt="${type}Icon">
        </a>`;
    externalLinks.insertAdjacentHTML("beforeend", linkHTML);
}

// Project properties
const desktopPreviewURL = document.querySelector('[data-project=desktopPreviewURL]');
const mobilePreviewURL = document.querySelector('[data-project=mobilePreviewURL]');
const title = document.querySelector('[data-project=name]');
const desc = document.querySelector('[data-project=desc]');
const externalLinks = document.querySelector('[data-project=externalLinks]');
const tech = document.querySelector('[data-project=tech]');
const fonts = document.querySelector('[data-project=fonts]');
const colors = document.querySelector('[data-project=colors]');

//Add content to portfolio item method
const addPortfolioItemsEvent = () => {
    portfolioItems.forEach(navLink => {
        navLink.addEventListener('click', function (e) {
            let projectName = navLink.getAttribute('data-name');
            let projectData = projectsData[projectName];
            let currentLang = localStorage.getItem('lang');
            showProjectTemplate();
            desktopPreviewURL.src = projectData.desktopPreviewURL;
            mobilePreviewURL.src = projectData.mobilePreviewURL;
            title.textContent = projectData.name;
            switch (currentLang) {
                case 'pl':
                    desc.textContent = projectData.descPL;
                    break;
                case 'en':
                    desc.textContent = projectData.descEN;
                    break;
            }
            externalLinks.innerHTML = null;
            if (projectData.webURL) {
                addExternalLink(projectData.webURL, "web", "network");
            }
            if (projectData.codeURL) {
                addExternalLink(projectData.codeURL, "code", "branch");
            }
            if (projectData.designURL) {
                addExternalLink(projectData.designURL, "design", "design");
            }
            tech.textContent = projectData.tech;
            fonts.textContent = projectData.fonts;
            let colorsArray = projectData.colors.split(',');
            colors.innerHTML = null;
            colorsArray.forEach(colorItem => {
                let colorItemHtml = document.createElement('div');
                let colorPreviewHtml = document.createElement('div');
                let colorValueHtml = document.createElement('div');
                colorItemHtml.classList.add('project__ColorItem');
                colorPreviewHtml.classList.add('project__ColorPreview');
                colorValueHtml.classList.add('project__ColorValue');
                colorPreviewHtml.style.backgroundColor = colorItem;
                colorValueHtml.textContent = colorItem;
                colorItemHtml.appendChild(colorPreviewHtml);
                colorItemHtml.appendChild(colorValueHtml);
                colors.appendChild(colorItemHtml);
            });
        }, false);
    });
}

const addHidePanelEvent = () => {
    projectCloseTrigger.forEach(trigger => {
        trigger.addEventListener('click', () => {
            hideProjectTemplate();
        }, false);
    })
}

addPortfolioItemsEvent();
addHidePanelEvent();
