// animation
let body = document.querySelector('body');
var cursor = document.querySelector('.cursor');
var cursor2 = document.querySelector('.cursor2');


document.addEventListener("mousemove", function(e) {
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

// local storage
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
    // add(nom, age, coding, compteur)
    if (nom && age && coding) {
        add(nom,age,coding,compteur)
    }
});

// clear storage/refresh
removeStag.onclick = function() {
    localStorage.clear();
    location.reload()
};

// refresh
window.addEventListener('load', () => {
    let number = parseInt(localStorage.length);
    compt(number)
    console.log(number);
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let valeur = localStorage.getItem(key);
        let final = JSON.parse(valeur)
        add(final)
    }
});

function compt(x) {
    return compteur = x
};

// FILTRE
let btnFilter = document.querySelector('.dropdown')
let btnAll = document.querySelectorAll('.dropdown-item')[0]
let btnFilter1 = document.querySelectorAll('.dropdown-item')[1]
let btnFilter2 = document.querySelectorAll('.dropdown-item')[2]
let btnFilter3 = document.querySelectorAll('.dropdown-item')[3]

btnFilter1.addEventListener('click', ()=> {
    console.log(localStorage);
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let valeur = localStorage.getItem(c)
        let final = JSON.parse(valeur)
        let coding = final.coding
        console.log(coding);
        let finalFinal = coding.toLowerCase().split(" ").join("")
        // console.log(finalFinal);
        let lesLi = Array.from(listStag.children)
        if (finalFinal !== "15") {
            console.log(lesLi[i]);
            lesLi[i].style.display = "none"
        } else {
            lesLi[i].style.display = "block"
        }
    }
})

btnFilter2.addEventListener('click', ()=> {
    console.log(localStorage);
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let valeur = localStorage.getItem(key)
        let final = JSON.parse(valeur)
        let coding = final.id
        let finalFinal = coding.toLowerCase().split(" ").join("")
        // console.log(finalFinal);
        let lesLi = Array.from(liste.children)
        if (finalFinal !== "16") {
            console.log(lesLi[i]);
            lesLi[i].style.display = "none"
        } else {
            lesLi[i].style.display = "block"
        }
    }
})

btnFilter3.addEventListener('click', ()=> {
    console.log(localStorage);
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let valeur = localStorage.getItem(key)
        let final = JSON.parse(valeur)
        let coding = final.id
        let finalFinal = coding.toLowerCase().split(" ").join("")
        // console.log(finalFinal);
        let lesLi = Array.from(liste.children)
        if (finalFinal !== "17") {
            console.log(lesLi[i]);
            lesLi[i].style.display = "none"
        } else {
            lesLi[i].style.display = "block"
        }
    }
})
