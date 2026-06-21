// ================= CART BUTTON =================

const cartBtn =
document.querySelector(".cart-btn");

const cartSidebar =
document.querySelector(".cart-sidebar");

const closeCart =
document.querySelector(".close-cart");

cartBtn.addEventListener("click", () => {

    cartSidebar.classList.add("active");

});

closeCart.addEventListener("click", () => {

    cartSidebar.classList.remove("active");

});

// ================= MOBILE MENU =================

const menuToggle =
document.querySelector(".menu-toggle");

const navMenu =
document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

// ================= ORDER BUTTON =================

const orderBtn =
document.querySelector(".order-btn");

orderBtn.addEventListener("click", () => {

    document.querySelector("#restaurants")
    .scrollIntoView({
        behavior: "smooth"
    });

});

// ================= MENU MODAL =================

const menuModal =
document.querySelector(".menu-modal");

const menuButtons =
document.querySelectorAll(".view-btn");

const closeMenu =
document.querySelector(".close-menu");

const menuTitle =
document.getElementById("menu-title");

const menuItems =
document.getElementById("menu-items");

menuButtons[0].addEventListener("click", () => {

    menuTitle.textContent =
    "Burger House Menu";

    menuItems.innerHTML = `
        <p>Classic Burger - $8.99</p>
        <p>Cheese Burger - $10.99</p>
    `;

    menuModal.style.display = "flex";

});

menuButtons[1].addEventListener("click", () => {

    menuTitle.textContent =
    "Pizza Palace Menu";

    menuItems.innerHTML = `
        <p>Margherita Pizza - $10.99</p>
        <p>Veg Pizza - $12.99</p>
    `;

    menuModal.style.display = "flex";

});

menuButtons[2].addEventListener("click", () => {

    menuTitle.textContent =
    "Asian Bowl Menu";

    menuItems.innerHTML = `
        <p>Veg Hakka Noodles - $7.99</p>
        <p>Fried Rice - $8.99</p>
    `;

    menuModal.style.display = "flex";

});

closeMenu.addEventListener("click", () => {

    menuModal.style.display = "none";

});

window.addEventListener("click", (e) => {

    if(e.target === menuModal){

        menuModal.style.display = "none";

    }

});

// ================= CHECKOUT =================

const checkoutBtn =
document.querySelector(".checkout-btn");

checkoutBtn.addEventListener("click", () => {

    alert(
        "Thank you for ordering with FastBite!"
    );

});

// ================= NAVIGATION =================

const navLinks =
document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

// ================= REMOVE ITEM =================

const removeButtons =
document.querySelectorAll(".remove-btn");

removeButtons.forEach(button => {

    button.addEventListener("click", () => {
    button.parentElement.style.opacity = "0";

setTimeout(() => {
    button.parentElement.remove();
}, 300);

    });

});

// ================= QUANTITY BUTTONS =================

const quantityBoxes =
document.querySelectorAll(".quantity");

quantityBoxes.forEach(box => {

    const minus =
    box.children[0];

    const number =
    box.children[1];

    const plus =
    box.children[2];

    let count = 1;

    plus.addEventListener("click", () => {

        count++;

        number.textContent = count;

    });

    minus.addEventListener("click", () => {

        if(count > 1){

            count--;

            number.textContent = count;

        }

    });

});