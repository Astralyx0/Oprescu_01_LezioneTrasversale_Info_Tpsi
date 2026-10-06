
//Documentazione: https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch

async function loadPage(NomePagine) { //funzione asincrona perchè "fetch" impiega del tempo per eseguire, 
                                        //di conseguenza bisogna aspettare la fine del esecucione del fetch
    
    const container = document.getElementById('containerContenuti'); //riferimento al div nel index.html
    
    const response = await fetch(`html/${NomePagine}`); //"prendiamo" la pagina html
    const html = await response.text(); // e facciamo riferimento al contenuto
        
    container.innerHTML = html; //inseriamo il contenuto della pagina html nel div dichiarato sopra
}

// carichiamo una pagina default
document.addEventListener('DOMContentLoaded', () => {  //funzione anonima
    loadPage('presentazione.html');
});