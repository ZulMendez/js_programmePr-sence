// storage event 
window.onstorage = event => {
    console.log(event);
};

window.addEventListener('storage', function(event) {
    console.log(event);
});