// DOM Elements
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
const carts = document.querySelectorAll(".add-cart");
const mobileCartCounter = document.querySelector("#mobile a span");

// Product List
const products = [
  { name: "Men's Multicolor Shirt", price: 779.99, image: "image/products/f1.jpg", id:0 },
  { name: "Men's Floral Shirt", price: 779.99, image: "image/products/f2.jpg", id:1  },
  { name: "Men's Floral Short-Sleeve Shirt", price: 779.99, image: "image/products/f3.jpg", id:2  },
  { name: "Men's Floral Short-Sleeve Shirt", price: 779.99, image: "image/products/f4.jpg", id:3  },
  { name: "Men's Floral Short-Sleeve Shirt", price: 899.99, image: "image/products/f5.jpg", id:4  },
  { name: "Men's Two-Tone Corduroy Shirt", price: 999.99, image: "image/products/f6.jpg", id:5  },
  { name: "Men's Fashion Shorts", price: 999.99, image: "image/products/f7.jpg", id:6  },
  { name: "Women's Cat Print Blouse", price: 999.99, image: "image/products/f8.jpg", id:7  },
  { name: "Men's Fashion Shirts", price: 679.99, image: "image/products/n1.jpg", id:8  },
  { name: "Men's Fashion Long Sleeves Shirt", price: 679.99, image: "image/products/n2.jpg", id:9  },
  { name: "Men's Fashion Long Sleeves Shirt", price: 679.99, image: "image/products/n3.jpg", id:10  },
  { name: "Men's Fashion Shirts", price: 899.99, image: "image/products/n4.jpg", id:11  },
  { name: "Men's Fashion Long Sleeves Shirt", price: 679.99, image: "image/products/n5.jpg", id:12  },
  { name: "Men's Fashion Shorts", price: 999.99, image: "image/products/n6.jpg", id:13  },
  { name: "Men's Khaki Long Sleeves Shirt", price: 899.99, image: "image/products/n7.jpg", id:14  },
  { name: "Men's Fashion Shirts", price: 899.99, image: "image/products/n8.jpg", id:15  },
];

// // Add event listeners to "Add to Cart" buttons
// carts.forEach((cart, index) => {
//   cart.addEventListener("click", () => {
//     const quantity = parseInt(document.querySelectorAll('input[type="number"]')[index]?.value, 10) || 1;
//     const size = document.querySelectorAll("select")[index]?.value || "Default";

//     const selectedProduct = { ...products[index] }; // Create a new object to avoid modifying the original products
//     addToCart(selectedProduct, quantity, size);
//     updateCartUI();
//   });
// });

// // Initialize the cart on page load
// function initializeCart() {
//   const productNumbers = parseInt(localStorage.getItem("cartNumbers")) || 0;
//   const desktopCartCounter = document.querySelector(".cart span");
//   const mobileCartCounter = document.querySelector("#mobile a span");

//   if (desktopCartCounter) desktopCartCounter.textContent = productNumbers;
//   if (mobileCartCounter) mobileCartCounter.textContent = productNumbers;

//   const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   if (cart.length > 0) {
//     updateCartUI();
//   }
// }

// // Add product to the cart
// // Add product to the cart
// function addToCart(product, quantity, size) {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   // Add size and quantity to the product
//   product.quantity = parseInt(quantity);
//   product.size = size;

//   // Check if the product already exists in the cart with the same id and size
//   const existingProduct = cart.find((item) => item.id === product.id && item.size === size);

//   if (existingProduct) {
//     // If product exists, just update the quantity
//     existingProduct.quantity += product.quantity;
//   } else {
//     // If not, add the new product
//     cart.push(product);
//   }

//   // Save the updated cart to localStorage
//   localStorage.setItem("cart", JSON.stringify(cart));

//   // Update cart numbers after adding the product
//   updateCartNumbers(product.quantity); // Update cart numbers based on the quantity of the added product
// }

// // Update cart numbers in local storage and UI
// // Update cart numbers in local storage and UI
// function updateCartNumbers(quantity) {
//   let productNumbers = parseInt(localStorage.getItem("cartNumbers")) || 0;
//   productNumbers += quantity;  // Add the new quantity to the total

//   // Save the updated cart number to localStorage
//   localStorage.setItem("cartNumbers", productNumbers);

//   // Update desktop and mobile cart counters
//   const desktopCartCounter = document.querySelector(".cart span");
//   const mobileCartCounter = document.querySelector("#mobile a span");

//   if (desktopCartCounter) desktopCartCounter.textContent = productNumbers;
//   if (mobileCartCounter) mobileCartCounter.textContent = productNumbers;
// }

// // Update the cart UI
// function updateCartUI() {
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const productNumbers = cart.reduce((acc, item) => acc + item.quantity, 0);

//   const desktopCartCounter = document.querySelector(".cart span");
//   const mobileCartCounter = document.querySelector("#mobile a span");

//   if (desktopCartCounter) desktopCartCounter.textContent = productNumbers;
//   if (mobileCartCounter) mobileCartCounter.textContent = productNumbers;
// }

// Mobile navigation menu toggle
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

// Call initializeCart on DOM load
initializeCart();
