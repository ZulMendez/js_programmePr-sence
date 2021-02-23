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
})
// console.log(Votre adresse ip : ${data.json});

fetch('http://ip-api.com/json/')
.then(res=> res.json())
.then(res => {
    ville.innerHTML = res.city
    pays.innerHTML = res.country
    provider.innerHTML = res.isp
});

async function infos() {
    let rep = await fetch('http://api.ipify.org/?format=json');
    let data = await rep.json();

    console.log(data);
    
}
infos();

// DATE 

let date = new Date();
console.log(date);

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