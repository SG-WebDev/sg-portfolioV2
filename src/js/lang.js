const langItems = document.querySelectorAll('.nav__LangItem');
const contentElements = document.querySelectorAll('[data-content]');

async function loadLangData() {
    let response = await fetch('https://sgrobelny.dev/assets/data/lang.json');
    return await response.json();
}

let langData;
loadLangData()
    .then(data => {
        langData = data;
    })
    .catch((error) => {
        alert('Cannot load language data');
    });

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
                chosenLang = langData.pl;
                break;
            case 'en':
                chosenLang = langData.en;
                break;
        }
        contentElements.forEach( contentElement => {
            let contentElementValue = contentElement.getAttribute('data-content');
            contentElement.textContent = chosenLang[contentElementValue];
        });
    }, false);
});