console.log(localStorage);

let divStag = document.querySelector('#listStagiaires');
let listStag = document.querySelector('.listStag');

let inpNom = document.querySelector('#inpNom');
let inpAge = document.querySelector('#inpAge');
let inpCoding = document.querySelector('#inpCoding')
let ajouteStag = document.querySelector('.ajouteStag');

let removeStag = document.querySelector('.removeStag');
let refreshStag = document.querySelector('.refreshStag');
let input = document.querySelectorAll('input');

// ajouter
function add(a, b, c, key) {
    let lesStag = {
        nom: a,
        age: b,
        coding: c,
    }
    let myObj = JSON.stringify(lesStag);
    localStorage.setItem(key, myObj);
    let myObjend = JSON.parse(localStorage.getItem(key)) 

    console.log(myObjend);

    let list = document.createElement('li');
    list.innerText = inpNom.value;
    list.classList.add('stagiaire');
    listStag.appendChild(list);

    // bouton de check
    let checkBtn = document.createElement('input');
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    checkBtn.setAttribute('type', 'checkbox')
    checkBtn.classList.add('check-btn');
    list.appendChild(checkBtn);

    // bouton de supprimer
    let removeBtn = document.createElement('button');
    removeBtn.innerHTML = '<i class="fas fa-trash"></i> remove';
    removeBtn.classList.add('remove-btn');
    list.appendChild(removeBtn);

    inpNom.value = '';
    inpAge.value = '';
    inpCoding.value = '';

    removeBtn.addEventListener('click', (e) => {
        for (let i = 0; i< localStorage.length; i++) {
            let key = localStorage.key(i);
            localStorage.removeItem(key);
            let parentListe = e.target.parentElement;
            parentListe.remove()
        }
    })
}

let compteur = 0;
ajouteStag.addEventListener('click', (e) => {
    e.preventDefault();
    let nom = input[0].value
    let age = input[1].value
    let coding = input[2].value
    compteur++
    add(nom, age, coding, compteur)
});

// clear storage/refresh
removeStag.onclick = function() {
    localStorage.clear();
    location.reload()
};



// window.onstorage = event => {
//     console.log(event);
// };

window.addEventListener('load', () => {
    let number = parseInt(localStorage.length);
    compt(number)
    console.log(number);
});

function compt(x) {
    return compteur = x
}