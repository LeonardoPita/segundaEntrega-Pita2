import { products } from "./src/stock.js";
/* ------------------------------VARIABLES---------------------------------- */

const bannerBtn = document.querySelector(".banner-btn");

const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");
const bagBtn = document.querySelector(".bag-btn");
const myCart = [];

/* ------------------------------PRODUCTS DISPLAY FROM STOCK---------------------------------- */


products.forEach((product) => {
    let productContent = document.createElement("article");
    productContent.classList.add("product");
    productContent.innerHTML = `<div class="img-container">
    <img src="${product.img}"
        alt="product car decal" class="product-img">
    <button class="bag-btn" id="${product.id}">
        <i class="fas fa-shopping-cart"></i>
        add to basket
    </button>
</div>
<h3>${product.title}</h3>
<h4>$${product.price}</h4>`
    productsDOM.append(productContent);
    productContent.addEventListener("click", () => {console.log("hola");})  ////////////////////Only way i can add the event
});

/* --------------------------------FUNCTIONS FOR OPEN AND CLOSE THE CART----------------------- */

const changeCartStyles = () => {
    cartDOM.classList.toggle("showCart");
    cartOverlay.classList.toggle("transparentBcg");
}
const toggleCartOpenClose = () => {
    cartBtn.addEventListener("click", changeCartStyles);
    closeCartBtn.addEventListener("click", changeCartStyles);
}
toggleCartOpenClose();

/* ------------------------------ADD PRODUCTS AND DISPLAY IN CART---------------------------- */



