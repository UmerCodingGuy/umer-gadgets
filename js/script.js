const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeButton.innerHTML = "🌞";

    } else {

        themeButton.innerHTML = "🌙";

    }

});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ===========================
PRODUCT SEARCH
=========================== */

const search = document.querySelector("#search");

if(search){

    const products = document.querySelectorAll(".product");

    search.addEventListener("input", function(){

        const value = search.value.toLowerCase();

        products.forEach(function(product){

            const name = product.dataset.name;

            if(name.includes(value)){

                product.style.display = "block";

            }else{

                product.style.display = "none";

            }

        });

    });

}

/* ===========================
SHOPPING CART
=========================== */

let cart = 0;

const cartCount = document.querySelector("#cart-count");

const cartButtons = document.querySelectorAll(".product .btn");

cartButtons.forEach(function(button){

    button.addEventListener("click", function(event){

        event.preventDefault();

        cart++;

        if(cartCount){

            cartCount.textContent = cart;

        }

    });

});

/* ===========================
MOBILE MENU
=========================== */

const menuButton = document.querySelector("#menu-toggle");

const navLinks = document.querySelector("#nav-links");

if(menuButton){

    menuButton.addEventListener("click", function(){

        navLinks.classList.toggle("show");

    });

}