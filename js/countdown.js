

const countdown = () => {
    const countDate = new Date("December 25, 2021 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now ;

    //Calculation du format du temps

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //Calculation du tout 
    // Math.floor retourne un nombre entier
    const textJour = Math.floor(gap / day );
    const textHeures = Math.floor((gap % day) / hour );
    const textMinutes = Math.floor ((gap % hour) / minute);
    const textSecondes = Math.floor ((gap % minute)/ second);
    
    // Mettre à jour le texte dans HTML

    document.querySelector(".jour").innerText = textJour;
    document.querySelector(".heures").innerText = textHeures;
    document.querySelector(".minutes").innerText = textMinutes;
    document.querySelector(".secondes").innerText = textSecondes;

};

// Mettre à jour le compteur pour actualiser chaque secondes

setInterval(countdown, 1000);


