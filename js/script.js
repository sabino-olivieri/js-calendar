//creo array dayWeek
const dayWeek = ["lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato", "domenica"];

//creo variabile d'appoggio dayIndex
let dayIndex = 4; 

// creo variabile con ultimo giorno di febbraio
const lastDayFeb = 29;

// prendo elemento calendar
const calendarElem = document.querySelector(".calendar");

// creo variabile per la stampa finale
let stampBox = "";

// creo variabile per lo sfondo
let bgBox = "bg-black";



// creo ciclo per la stampa dei box vuoti di febbraio
for(let i = dayIndex; i > 0; i--) {

    console.warn(lastDayFeb - i + 1, dayWeek[dayIndex - i]);
    
    stampBox += `<div class="box flex center gap opacity50">
    <span>${lastDayFeb - i + 1}</span>
    <h4>${dayWeek[dayIndex - i]}</h4>
    </div>`

}

// creo ciclo per la stampa del mese
for (let x = 0; x < 31; x++) {

    if (dayIndex === 6) {

        bgBox = "bg-red";

    } else {

        bgBox = "bg-black";
    }

    stampBox += `<div class="box flex center gap ${bgBox}" id="day${x + 1}">
    <span>${x + 1}</span>
    <h4>${dayWeek[dayIndex]}</h4>
    </div>`

    if (dayIndex === 6) {

        dayIndex = 0;
 
    } else {

        dayIndex++;
    }

}

calendarElem.innerHTML= stampBox;

// creo array per i boxElemm
const arrayBoxElem = [];

// aggiungo opzione per cancellare i giorni passatti cliccando
for (let y = 0; y < 31; y++) {

    arrayBoxElem.push(document.getElementById(`day${y+1}`));
    arrayBoxElem[y].addEventListener("click", function () {
        arrayBoxElem[y].classList.toggle("opacity50");
    });

}