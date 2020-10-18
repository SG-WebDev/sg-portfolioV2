const projectTemplate = document.querySelector('#projectView');
const portfolioItems = document.querySelectorAll('.portfolioList__Item');
const addPortfolioItemsEvent = () => {
    portfolioItems.forEach( navLink => {
        navLink.addEventListener('click', function(e) {
            let projectName = navLink.getAttribute("data-name");
            console.log(projectName);
        }, false);
    });
}
addPortfolioItemsEvent();
