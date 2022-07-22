/* This function redirect the user to the cart */
function goToCart(details) {
    window.location.href = `selection.html`;
}

/* This variable call the goToCart function after the user click on the cart icon */
let cart_icon = document.getElementById(`cart-icon`);
cart_icon.addEventListener(`click`, goToCart);

/* This function redirect the user to the home */
function checkout(details) { 
        window.location.href = `selection.html`;
}

/* This variable call the checkout function and redirect the user to the checkout page */
let checkout_button = document.getElementsByClassName(`button-checkout`);
/*How to make this for loop goes inside the function */
for (let counter = 0; counter < checkout_button.length; counter++){
    checkout_button[counter].addEventListener(`click`, checkout);
}

/* The array of the cart starting empty */
let cart = [];

/* This function creates the object for the first sneaker its information such as title, image url and price for the second sneaker */
function addFirstSneakerToKart(details) {
    let first_sneaker =
        {
            title: `PG 6`,
            price: 145,
            img_url: `https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a43c29d4-577c-46d6-8a7f-1ba6fc2c859e/pg-6-basketball-shoes-LC51Zx.png`
        }

        /* Add the object to the cart array */
        cart.push(first_sneaker);
        /* Translate the array to a JSON */
        let cart_json = JSON.stringify(cart);
        /* Set the cookie as JSON */
        Cookies.set(`selection`, cart_json);
        /* Alert the user that the sneaker was added to the cart */
        alert(`Congratulations! You have just added the model ${first_sneaker[`title`]} to the cart.`)
};

/* These two lines of code gets the first sneaker by its id, then call the function addFirstSneaker after being clicked */
let add_first_sneaker = document.getElementById(`add_first_sneaker`);
add_first_sneaker.addEventListener(`click`, addFirstSneakerToKart);

/* This function creates the object for the second sneaker its information such as title, image url and price for the second sneaker */
function addSecondSneakerToKart(details) {
    let second_sneaker =
        {
            title: `Nike Go FlyEase`,
            price: 160,
            img_url: `https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4bcd049d-d1ac-43ba-b29a-88dd74d69de2/go-flyease-easy-on-off-shoes-84H33P.png`
        }

        /* Add the object to the cart array */
        cart.push(second_sneaker);
        /* Translate the array to a JSON */
        let cart_json = JSON.stringify(cart);
        /* Set the cookie as JSON */
        Cookies.set(`selection`, cart_json);
        /* Alert the user that the sneaker was added to the cart */
        alert(`Congratulations! You have just added the model ${second_sneaker[`title`]} to the cart.`)
}

/* These two lines of code gets the second sneaker by its id, then call the function addFirstSneaker after being clicked */
let add_second_sneaker = document.getElementById(`add_second_sneaker`);
add_second_sneaker.addEventListener(`click`, addSecondSneakerToKart);

/* This function creates the object for the third sneaker its information such as title, image url and price for the second sneaker */
function addThirdSneakerToKart(details) {
    let third_sneaker =
        {
            title: `Nike Blazer Mid '77`,
            price: 135,
            img_url: `https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2a602edd-0fe4-4d70-a622-0a0ffe845346/blazer-mid-77-shoes-BPqrjC.png`
        }

        /* Add the object to the cart array */
        cart.push(third_sneaker);
        /* Translate the array to a JSON */
        let cart_json = JSON.stringify(cart);
        /* Set the cookie as JSON */
        Cookies.set(`selection`, cart_json);
        /* Alert the user that the sneaker was added to the cart */
        alert(`Congratulations! You have just added the model ${third_sneaker[`title`]} to the cart.`)
}

/* These two lines of code gets the third sneaker by its id, then call the function addFirstSneaker after being clicked */
let add_third_sneaker = document.getElementById(`add_third_sneaker`);
add_third_sneaker.addEventListener(`click`, addThirdSneakerToKart);

/* This function creates the object for the fourth sneaker its information such as title, image url and price for the second sneaker */
function addFourthSneakerToKart(details) {
    let fourth_sneaker =
        {
            title: `Air Jordan 1 Low OG SP`,
            price: 190,
            img_url: `https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/81a34c43-7f94-4f83-9e87-495c42221274/air-jordan-1-low-og-sp-shoes.png`
        }

        /* Add the object to the cart array */
        cart.push(fourth_sneaker);
        /* Translate the array to a JSON */
        let cart_json = JSON.stringify(cart);
        /* Set the cookie as JSON */
        Cookies.set(`selection`, cart_json);
        /* Alert the user that the sneaker was added to the cart */
        alert(`Congratulations! You have just added the model ${fourth_sneaker[`title`]} to the cart.`)
}

/* These two lines of code gets the fourth sneaker by its id, then call the function addFirstSneaker after being clicked */
let add_fourth_sneaker = document.getElementById(`add_fourth_sneaker`);
add_fourth_sneaker.addEventListener(`click`, addFourthSneakerToKart);

/* This function create the object for the fifth sneaker its information such as title, image url and price for the second sneaker */
function addFifthSneakerToKart(details) {
    let fifth_sneaker =
        {
            title: `Nike Air Force`,
            price: 145,
            img_url: `https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoe-rWtqPn.png`
        }

        /* Add the object to the cart array */
        cart.push(fifth_sneaker);
        /* Translate the array to a JSON */
        let cart_json = JSON.stringify(cart);
        /* Set the cookie as JSON */
        Cookies.set(`selection`, cart_json);
        /* Alert the user that the sneaker was added to the cart */
        alert(`Congratulations! You have just added the model ${fifth_sneaker[`title`]} to the cart.`)
}

/* These two lines of code gets the fifth sneaker by its id, then call the function addFirstSneaker after being clicked */
let add_fifth_sneaker = document.getElementById(`add_fifth_sneaker`);
add_fifth_sneaker.addEventListener(`click`, addFifthSneakerToKart);

/* This function create the object for the sixth sneaker its information such as title, image url and price for the second sneaker */
function addSixthSneakerToKart(details) {
    let sixth_sneaker =
        {
            title: `Kyrie Flytrap`,
            price: 120,
            img_url: `https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c15f4698-7f41-4101-acb4-2f746d2d9195/kyrie-flytrap-5-basketball-shoes-ctRncr.png`
        }

        /* Add the object to the cart array */
        cart.push(sixth_sneaker);
        /* Translate the array to a JSON */
        let cart_json = JSON.stringify(cart);
        /* Set the cookie as JSON */
        Cookies.set(`selection`, cart_json);
        /* Alert the user that the sneaker was added to the cart */
        alert(`Congratulations! You have just added the model ${sixth_sneaker[`title`]} to the cart.`)
}

/* These two lines of code gets the sixth sneaker by its id, then call the function addFirstSneaker after being clicked */
let add_sixth_sneaker = document.getElementById(`add_sixth_sneaker`);
add_sixth_sneaker.addEventListener(`click`, addSixthSneakerToKart);

/* This function create the object for the seventh sneaker its information such as title, image url and price for the second sneaker */
function addSeventhSneakerToKart(details) {
    let seventh_sneaker =
        {
            title: `Air Jordan 1 Zoom CmlfLow OG`,
            price: 190,
            img_url: `https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/30b29f29-321d-4360-a03a-611188bc0cfc/air-jordan-1-zoom-cmft-shoes.png`
        }

        /* Add the object to the cart array */
        cart.push(seventh_sneaker);
        /* Translate the array to a JSON */
        let cart_json = JSON.stringify(cart);
        /* Set the cookie as JSON */
        Cookies.set(`selection`, cart_json);
        /* Alert the user that the sneaker was added to the cart */
        alert(`Congratulations! You have just added the model ${seventh_sneaker[`title`]} to the cart.`)
}

/* These two lines of code gets the seventh sneaker by its id, then call the function addFirstSneaker after being clicked */
let add_seventh_sneaker = document.getElementById(`add_seventh_sneaker`);
add_seventh_sneaker.addEventListener(`click`, addSeventhSneakerToKart);

/* This function create the object for the eigth sneaker its information such as title, image url and price for the second sneaker */
function addEigthSneakerToKart(details) {
    let eigth_sneaker =
        {
            title: `Nike Air More Uptempo '96`,
            price: 210,
            img_url: `https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/75625bf2-d5bd-4a9d-84cc-e0f20d76d26c/air-more-uptempo-96-shoes-k9G4CT.png`
        }

        /* Add the object to the cart array */
        cart.push(eigth_sneaker);
        /* Translate the array to a JSON */
        let cart_json = JSON.stringify(cart);
        /* Set the cookie as JSON */
        Cookies.set(`selection`, cart_json);
        /* Alert the user that the sneaker was added to the cart */
        alert(`Congratulations! You have just added the model ${eigth_sneaker[`title`]} to the cart.`)
}

/* These two lines of code gets the eigth sneaker by its id, then call the function addFirstSneaker after being clicked */
let add_eigth_sneaker = document.getElementById(`add_eigth_sneaker`);
add_eigth_sneaker.addEventListener(`click`, addEigthSneakerToKart);

/* This function create the object for the ninth sneaker its information such as title, image url and price for the second sneaker */
function addNinthSneakerToKart(details) {
    let ninth_sneaker =
        {
            title: `Nike Air Max 97`,
            price: 230,
            img_url: `https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fcf0e10a-630a-413c-8920-7383a89a76a6/air-max-97-shoes-4MttV5.png`
        }

        /* Add the object to the cart array */
        cart.push(ninth_sneaker);
        /* Translate the array to a JSON */
        let cart_json = JSON.stringify(cart);
        /* Set the cookie as JSON */
        Cookies.set(`selection`, cart_json);
        /* Alert the user that the sneaker was added to the cart */
        alert(`Congratulations! You have just added the model ${ninth_sneaker[`title`]} to the cart.`)
}

/* These two lines of code gets the ninth sneaker by its id, then call the function addFirstSneaker after being clicked */
let add_ninth_sneaker = document.getElementById(`add_ninth_sneaker`);
add_ninth_sneaker.addEventListener(`click`, addNinthSneakerToKart);

/* This function create the object for the tenth sneaker its information such as title, image url and price for the second sneaker */
function addTenthSneakerToKart(details) {
    let tenth_sneaker =
        {
            title: `Nike Metcon 8 By Andre Houdet`,
            price: 190,
            img_url: `https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ac38a91a-d480-48b2-92b1-bb3a18c17851/custom-nike-metcon-8-by-you.png`
        }

        /* Add the object to the cart array */
        cart.push(tenth_sneaker);
        /* Translate the array to a JSON */
        let cart_json = JSON.stringify(cart);
        /* Set the cookie as JSON */
        Cookies.set(`selection`, cart_json);
        /* Alert the user that the sneaker was added to the cart */
        alert(`Congratulations! You have just added the model ${tenth_sneaker[`title`]} to the cart.`)
}

/* These two lines of code gets the tenth sneaker by its id, then call the function addFirstSneaker after being clicked */
let add_tenth_sneaker = document.getElementById(`add_tenth_sneaker`);
add_tenth_sneaker.addEventListener(`click`, addTenthSneakerToKart);

/* This function create the object for the eleventh sneaker its information such as title, image url and price for the second sneaker */
function addEleventhSneakerToKart(details) {
    let eleventh_sneaker =
        {
            title: `Nike Blazer Low '77 Jumbo`,
            price: 145,
            img_url: `https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/446fd5ec-66d0-46ed-bf4d-39e2b91a9697/blazer-low-77-jumbo-shoes-zXG6dN.png`
        }

        /* Add the object to the cart array */
        cart.push(eleventh_sneaker);
        /* Translate the array to a JSON */
        let cart_json = JSON.stringify(cart);
        /* Set the cookie as JSON */
        Cookies.set(`selection`, cart_json);
        /* Alert the user that the sneaker was added to the cart */
        alert(`Congratulations! You have just added the model ${eleventh_sneaker[`title`]} to the cart.`)
}

/* These two lines of code gets the tenth sneaker by its id, then call the function addFirstSneaker after being clicked */
let add_eleventh_sneaker = document.getElementById(`add_eleventh_sneaker`);
add_eleventh_sneaker.addEventListener(`click`, addEleventhSneakerToKart);

/* This function create the object for the twelfth sneaker its information such as title, image url and price for the second sneaker */
function addTwelfthSneakerToKart(details) {
    let twelfth_sneaker =
        {
            title: `Nike Infinity Run 3 A.I.R x Hola Lou`,
            price: 225,
            img_url: `https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c3002b25-8cb5-4841-b82b-394e3034fa72/infinity-run-3-air-hola-lou-road-running-shoes-bqct4s.png`
        }

        /* Add the object to the cart array */
        cart.push(twelfth_sneaker);
        /* Translate the array to a JSON */
        let cart_json = JSON.stringify(cart);
        /* Set the cookie as JSON */
        Cookies.set(`selection`, cart_json);
        /* Alert the user that the sneaker was added to the cart */
        alert(`Congratulations! You have just added the model ${twelfth_sneaker[`title`]} to the cart.`)
}

/* These two lines of code gets the tenth sneaker by its id, then call the function addFirstSneaker after being clicked */
let add_twelfth_sneaker = document.getElementById(`add_twelfth_sneaker`);
add_twelfth_sneaker.addEventListener(`click`, addTwelfthSneakerToKart);
