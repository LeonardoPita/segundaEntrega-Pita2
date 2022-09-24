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
        click the image to add to the basket
    </button>
</div>
<h3>${product.title}</h3>
<h4>$${product.price}</h4>`
    productsDOM.append(productContent);
/* ------------------------------CLICK PRODUCT TO ADD TO THE BASKET---------------------------- */
//TO DO --- Evitar que se agregue un producto dos veces, en su lugar agregar +1 a la cantidad.
    productContent.addEventListener("click", () => {
        myCart.push(products[product.id -1]);
        console.log(myCart);
        let cartItems = document.createElement("div");
        cartItems.classList.add("cart-item");
        cartItems.innerHTML = `<img src="${product.img}" alt="product car decal">
                                <div>
                                    <h4>${product.title}</h4>
                                    <h5>${product.price}</h5>
                                    <span class="remove-item">Delete</span>
                                </div>
                                <div>
                                    <i class="fas fa-chevron-up"></i>
                                    <p class="item-amount">${product.quantity}</p>
                                    <i class="fas fa-chevron-down"></i>
                                </div>`
        cartContent.append(cartItems);})  ////////////////////Only way i can add the event

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




