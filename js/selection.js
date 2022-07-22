/* This function redirect the user to the home */
function goToHome(details) {
    window.location.href = `index.html`;
}

/* This variable call the goToHome function after the user click on the logo icon */
let nike_icon = document.getElementById(`nike-icon`);
nike_icon.addEventListener(`click`, goToHome);

let cart_array = [];
let cart_json = Cookies.get(`selection`);
if(cart_json !== undefined) {
    cart_array = JSON.parse(cart_json);
}


for(let counter = 0; counter < cart_array.length; counter++) {
    if (cart_array !== undefined) {
    document.querySelector(`section`).insertAdjacentHTML(`afterend`, `<div class="cart_article">
    <img src="${cart_array[counter][`img_url`]}" class="cart-img">
    <h2 class="cart-title">${cart_array[counter][`title`]}</h2>
    <h3 class="cart-price">$${cart_array[counter][`price`]}</h3>
    </div>`);
    } 
    else {
        document.querySelector(`section`).insertAdjacentHTML(`afterend`, `<h1>Pick a sneaker. The cart is empty.</h1>`);
    }
}

let cart_article = document.getElementsByClassName(`cart_article`);
for(let counter = 0; counter < cart_article.length; counter++) {
    cart_article[counter][`style`][`border`] = `1px solid black`;
    cart_article[counter][`style`][`marginBottom`] = `20px`;
    cart_article[counter][`style`][`width`] = `400px`;
    cart_article[counter][`style`][`display`] = `grid`;
    cart_article[counter][`style`][`placeItems`] = `center`;
    cart_article[counter][`style`][`rowGap`] = `10px`;
}

let cart_img = document.getElementsByClassName(`cart-img`);
for(let counter = 0; counter < cart_img.length; counter++) {
    cart_img[counter][`style`][`width`] = `300px`;
}

let cart_title = document.getElementsByClassName(`cart-title`);
for(let counter = 0; counter < cart_title.length; counter++) {
    cart_title[counter][`style`][`color`] = `gray`;
   
}

let cart_price = document.getElementsByClassName(`cart-price`);
for(let counter = 0; counter < cart_price.length; counter++) {
    cart_price[counter][`style`][`color`] = `green`;
}