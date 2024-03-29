# CALENDARIO

## Testo della consegna

Un esercizio BONUS (facoltativo) se vorrete fare qualcosa in più durante le vacanze:
Stampare il calendario semplificato del mese corrente (marzo) colorando di rosso giorni festivi, indicando il giorno di settimana per ogni giorno del mese.
Per questo esercizio probabilmente vi servirà l'array di giorni di settimana, l'array di giorni festivi e un ciclo for.

## Svolgimento

- [x] creo arry dayWeek per i giorni della settimana
- [x] creo variabile d'appoggio dayIndex = 4 per dayWeek  
- [x] creo ciclo for che si ripete 31 volte
    - stampo nel box indice del ciclo + 1
    - stampo nel box dayWeek[dayIndex]
    - se dayIdex = 6
      dayIndex = 0
      sfondo = red
      altrimenti
      dayIndex++