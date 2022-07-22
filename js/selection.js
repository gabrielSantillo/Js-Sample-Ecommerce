/* This function redirect the user to the home */
function goToHome(details) {
    window.location.href = `index.html`;
}

/* This variable call the goToHome function after the user click on the logo icon */
let nike_icon = document.getElementById(`nike-icon`);
nike_icon.addEventListener(`click`, goToHome);

let cart_json = Cookies.get(`selection`);
let cart_array = JSON.parse(cart_json);

for(let counter = 0; counter < cart_array.length; counter++) {
    if (cart_array[counter][`title`] !== undefined) {
    document.querySelector(`section`).insertAdjacentHTML(`afterend`, `<h1>${cart_array[counter][`title`]}</h1>`);
    } 
}