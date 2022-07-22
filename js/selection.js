/* This function redirect the user to the home */
function goToHome(details) {
    window.location.href = `index.html`;
}

/* This variable call the goToHome function after the user click on the logo icon */
let nike_icon = document.getElementById(`nike-icon`);
nike_icon.addEventListener(`click`, goToHome);

/* The array of the cart starting empty */
let cart_array = [];
/* sotring the JSON to the cart */
let cart_json = Cookies.get(`selection`);
/* if the JSON is not empty, give its array of objetc to cart_array */
if(cart_json !== undefined) {
    cart_array = JSON.parse(cart_json);
}

/* This for loop check if the array of objects is undefined */
for(let counter = 0; counter < cart_array.length; counter++) {
    if (cart_array !== undefined) {
        /* if its not undefined, print in the screen the img, name and price of the sneaker added to the cart */
    document.querySelector(`section`).insertAdjacentHTML(`afterend`, `<div class="cart_article">
    <img src="${cart_array[counter][`img_url`]}" class="cart-img">
    <h2 class="cart-title">${cart_array[counter][`title`]}</h2>
    <h3 class="cart-price">$${cart_array[counter][`price`]}</h3>
    <button class="delete-button" id="${cart_array[counter][`title`]}">Delete Item</button>
    </div>`);
    } 
    else {
        /* if its empty, print the message to pick a sneaker and add to the cart */
        document.querySelector(`section`).insertAdjacentHTML(`afterend`, `<h1>Pick a sneaker. The cart is empty.</h1>`);
    }
}

/*These lines of code get the div with the information of the chosen snekar and style the information that its going to be printed */
let cart_article = document.getElementsByClassName(`cart_article`);
for(let counter = 0; counter < cart_article.length; counter++) {
    cart_article[counter][`style`][`marginBottom`] = `20px`;
    cart_article[counter][`style`][`width`] = `400px`;
    cart_article[counter][`style`][`display`] = `grid`;
    cart_article[counter][`style`][`placeItems`] = `center`;
    cart_article[counter][`style`][`rowGap`] = `10px`;
}

/*These lines of code get the image of the chosen sneaker and style them to look good by giving a nice size */
let cart_img = document.getElementsByClassName(`cart-img`);
for(let counter = 0; counter < cart_img.length; counter++) {
    cart_img[counter][`style`][`width`] = `300px`;
}

/* these lines of code get the name of the sneaker and changes its color */
let cart_title = document.getElementsByClassName(`cart-title`);
for(let counter = 0; counter < cart_title.length; counter++) {
    cart_title[counter][`style`][`color`] = `gray`;
   
}

/* these line of code get price of the sneaker and change its color */
let cart_price = document.getElementsByClassName(`cart-price`);
for(let counter = 0; counter < cart_price.length; counter++) {
    cart_price[counter][`style`][`color`] = `#4CAF50`;
}

/* These lines of code get the button that was added and style it to look good */
let delete_button = document.getElementsByClassName(`delete-button`);
for(let counter = 0; counter < delete_button.length; counter++) {
    delete_button[counter][`style`][`border`] = `none`;
    delete_button[counter][`style`][`color`] = `white`;
    delete_button[counter][`style`][`backgroundColor`] = `#f44336`;
    delete_button[counter][`style`][`fontSize`] = `20px`;
    delete_button[counter][`style`][`borderRadius`] = `10px`;
    delete_button[counter][`style`][`cursor`] = `pointer`;
    delete_button[counter][`style`][`width`] = `30%`;
    delete_button[counter][`style`][`height`] = `130%`;
}

/** 

function deleteItem(details) {
    let delete_button_clicked = [];
    delete_button_clicked = cart_array[counter];
    for(let counter = 0; counter < cart_array.length; counter++) {
        cart_array[counter].slice(counter, counter++);
    }
}

let delete_button_clicked = document.getElementById(`${cart_array[counter][`title`]}`);
delete_button_clicked.addEventListener(`click`, deleteItem)*/