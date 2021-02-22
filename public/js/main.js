console.log(localStorage.length);

let divStag = document.querySelector('#listStagiaires');
let listStag = document.querySelector('.listStag');

let inpKey = document.querySelector('#inpKey');
let inpValue = document.querySelector('#inpValue');
let ajouteStag = document.querySelector('.ajouteStag');

let removeStag = document.querySelector('.removeStag');
let refreshStag = document.querySelector('.refreshStag');


// ajouter
ajouteStag.onclick =  function() {
    const key = inpKey.value;
    const value = inpValue.value;

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
    }
}; 

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    // Ma liste
    let list = document.createElement('li');
    list.innerText = inpValue.value;
    list.classList.add('stagiaire');
    listStag.appendChild(list);

    listStag.innerHTML += `${value}`;
    // bouton de check
    let checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    checkBtn.classList.add('check-btn');
    listStag.appendChild(checkBtn);
    // bouton de supprimer
    let removeBtn = document.createElement('button');
    removeBtn.innerHTML = '<i class="fas fa-trash"></i> remove';
    removeBtn.classList.add('remove-btn');
    listStag.appendChild(removeBtn);
};

// effacer
removeStag.onclick = function() {
    localStorage.clear(key);
};


