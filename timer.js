/* nous sommes le mardi 2 juin 2020 , il est 14h21  et 38 secondes*/



let today = new Date()

/* tableau avec les jours de la semaine */






/* etape intermediaire  creer une variable pour chaque donnee qui nous servira a afficher l heure  : jour de la semaine , numero du jour, mois , annees , heure ,minute , secondes  */


function showtime(){

let hour = today.getHours();
let min = today.getMinutes();
let sec = today.getSeconds();

if (hour>12){
    hour -=12;
    am_pm="PM";
}
if (hour== 0){
    hr= 12;
    am_pm = "AM";
}

hour = hour < 10 ? "0" + hour : hour;
min = min < 10 ? "0" + min : min;
sec = sec < 10 ? "0" + sec : sec;

let currentTime = hour + ":"
        + min + ":" + sec + am_pm;

 document.querySelector(".timer").innerHTML = currentTime;
}
 showtime();
setInterval(showtime,1000)






/* construction de la chaine de caractere a afficher  */


