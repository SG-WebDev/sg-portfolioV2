const projectTemplate = document.querySelector('#projectView');
const portfolioItems = document.querySelectorAll('.portfolioList__Item');

async function loadPortfolioData() {
    let response = await fetch('https://sgrobelny.dev/assets/data/portfolio.json');
    return await response.json();
}

let projectData;
loadPortfolioData()
    .then(data => {
        projectData = data;
    })
    .catch((error) => {
        console.log('Cannot load project data');
    });

const addPortfolioItemsEvent = () => {
    portfolioItems.forEach( navLink => {
        navLink.addEventListener('click', function(e) {
            let projectName = navLink.getAttribute('data-name');
            console.log(projectName);
            console.log(projectData);
        }, false);
    });
}
addPortfolioItemsEvent();
