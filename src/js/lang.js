const langItems = document.querySelectorAll('.nav__LangItem');
const contentElements = document.querySelectorAll('[data-content]');

async function loadLangData() {
    let response = await fetch('http://localhost:63342/sg-portfolioV2/assets/data/lang.json');
    return await response.json();
}

let langData;
loadLangData()
    .then(data => {
        langData = data;
    })
    .catch((error) => {
        console.log('Cannot load language data');
    });

localStorage.setItem('lang', 'pl');
langItems.forEach( langItem => {
    langItem.addEventListener('click', function (e) {
        let lang = this.getAttribute('data-lang');
        langItems.forEach( elem => {
            elem.classList.remove('nav__LangItem--active');
        });
        this.classList.add('nav__LangItem--active');
        let chosenLang;
        switch (lang) {
            case 'pl':
                localStorage.setItem('lang', 'pl');
                chosenLang = langData.pl;
                break;
            case 'en':
                localStorage.setItem('lang', 'en');
                chosenLang = langData.en;
                break;
        }
        contentElements.forEach( contentElement => {
            let contentElementValue = contentElement.getAttribute('data-content');
            contentElement.textContent = chosenLang[contentElementValue];
        });
    }, false);
});