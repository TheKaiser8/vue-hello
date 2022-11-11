"use strict";

// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Il mio primo progetto con VueJS',
            photo: {
                title: 'Battle Charles-Max',
                image: 'leclerc-max-bahrain-2022.jpg'
            }
        }
    }
}).mount('#app');