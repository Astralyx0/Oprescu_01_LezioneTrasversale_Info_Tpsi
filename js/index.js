
//Documentazione: https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch

function setActiveNavButton(pageName) {
    const navButtons = document.querySelectorAll('nav button');

    navButtons.forEach((button) => {
        const isSelected = button.dataset.page === pageName;
        button.classList.toggle('selected', isSelected);
    });
}

async function loadPage(NomePagine) { //funzione asincrona perchè "fetch" impiega del tempo per eseguire, 
                                        //di conseguenza bisogna aspettare la fine del esecucione del fetch
    
    const container = document.getElementById('containerContenuti'); //riferimento al div nel index.html
    
    const response = await fetch(`html/${NomePagine}`); //"prendiamo" la pagina html
    const html = await response.text(); // e facciamo riferimento al contenuto
        
    container.innerHTML = html; //inseriamo il contenuto della pagina html nel div dichiarato sopra
    setActiveNavButton(NomePagine);
}

// carichiamo una pagina default
document.addEventListener('DOMContentLoaded', () => {  //funzione anonima
    setActiveNavButton('presentazione.html');
    loadPage('presentazione.html');
});