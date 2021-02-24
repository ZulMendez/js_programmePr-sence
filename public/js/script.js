let ville = document.querySelector('#city');
let pays = document.querySelector('#country');
let adresseIp = document.querySelector('#ip');
let provider = document.querySelector('#isp');
let info = document.querySelector('#info');
let hours = document.querySelector('#hours').innerHTML = Date();
let modal = document.querySelector('#mod');
let fermer = document.querySelector('#fermer');

fetch('http://api.ipify.org/?format=json')
.then(res => res.json())
.then(res =>{
    adresseIp.innerHTML = res.ip
});

fetch('http://ip-api.com/json/')
.then(res=> res.json())
.then(res => {
    ville.innerHTML = res.city
    pays.innerHTML = res.country
    provider.innerHTML = res.isp
});

// async function infos() {
//     let rep = await fetch('http://api.ipify.org/?format=json');
//     let data = await rep.json();

//     console.log(data);
    
// }
// infos();

// DATE et HEURE
let date = new Date();

// FORMAT DATE
function jour(){
    let date_actuelle = date.getDate();
    let mois = date.getMonth()+1;
    let annee = date.getFullYear();
    mois < 10 ? mois = `0${mois}` : mois
    document.getElementById("date").innerHTML=""+date_actuelle+"/"+mois+"/"+annee;
    console.log(date);
}
jour()

let updateClock = () => {
    let date = new Date()
    let heure_actuelle = date.getHours();
    let minutes_actuelle = date.getMinutes()+1;
    let seconde_actuelle = date.getSeconds()+1
    seconde_actuelle < 10 ? seconde_actuelle = `0${seconde_actuelle}` : seconde_actuelle
    let hours = document.querySelector('#hours')
    hours.innerText= `${heure_actuelle} :  ${minutes_actuelle} : ${seconde_actuelle}`

}
updateClock()

setInterval(updateClock,1000);

let date_actuelle = date.getDate();
let mois = date.getMonth()+1;
let annee = date.getFullYear();
let heure_actuelle = date.getHours();
let minutes_actuelle = date.getMinutes()+1;
let seconde_actuelle = date.getSeconds()+1
mois < 10 ? mois = `0${mois}` : mois
seconde_actuelle < 10 ? seconde_actuelle = `0${seconde_actuelle}` : seconde_actuelle


// EVENT
info.addEventListener('click', () => {
    if (modal.classList.contains('d-none')) {
        modal.classList.remove('d-none')
    }
});

info.addEventListener('click', () => {
    modal.style.display = "block"
});

fermer.addEventListener('click', () => {
    modal.style.display = "none"
    document.body.style.overflow= null
});


