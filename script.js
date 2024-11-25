const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

// Selectors
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

// Cart Data
let cart = [];

// Load Cart
function loadCart() {
    const savedCart = localStorage.getItem("cart");
    cart = savedCart ? JSON.parse(savedCart) : [];
    updateCart();
}

// Save Cart
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Update Cart
function updateCart() {
    cartItems.innerHTML = ""; // Clear current items
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - GH₵${item.price.toFixed(2)}
            <button class="remove-from-cart" data-index="${index}">Remove</button>
        `;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = `GH₵${total.toFixed(2)}`;
    saveCart();
}

// Add to Cart
addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const product = {
            id: button.getAttribute("data-id"),
            name: button.getAttribute("data-name"),
            price: parseFloat(button.getAttribute("data-price"))
        };

        cart.push(product);
        updateCart();
    });
});

// Remove from Cart
cartItems.addEventListener("click", e => {
    if (e.target.classList.contains("remove-from-cart")) {
        const index = e.target.getAttribute("data-index");
        cart.splice(index, 1);
        updateCart();
    }
});

// Initialize
window.onload = loadCart;


if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
