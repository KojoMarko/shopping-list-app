const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
let carts = document.querySelectorAll(".add-cart");
let products = [
  {
    name: "Men's Multicolor Shirt",
    price: 779.99,
    quantity: document.querySelector('input[type="number"]').value,
    size: document.querySelector("select").value,
    image: "image/products/f1.jpg",
    incart: 0
  },
  {
    name: "Men's Floral Shirt",
    price: 779.99,
    quantity: document.querySelector('input[type="number"]').value,
    size: document.querySelector("select").value,
    image: "image/products/f2.jpg",
    incart: 0
  },
  {
    name: "Men's Floral Short-Sleeve Shirt",
    price: 779.99,
    quantity: document.querySelector('input[type="number"]').value,
    size: document.querySelector("select").value,
    image: "image/products/f3.jpg",
    incart: 0
  },
  {
    name: "Men's Floral Short-Sleeve Shirt",
    price: 779.99,
    quantity: document.querySelector('input[type="number"]').value,
    size: document.querySelector("select").value,
    image: "image/products/f4.jpg",
    incart: 0
  },
  {
    name: "Men's Floral Short-Sleeve Shirt",
    price: 899.99,
    quantity: document.querySelector('input[type="number"]').value,
    size: document.querySelector("select").value,
    image: "image/products/f5.jpg",
    incart: 0
  },
  {
    name: "Men's Two-Tone Corduroy Shirt",
    price: 999.99,
    quantity: document.querySelector('input[type="number"]').value,
    size: document.querySelector("select").value,
    image: "image/products/f6.jpg",
    incart: 0
  },
  {
    name: "Men's Fashion Shorts",
    price: 999.99,
    quantity: document.querySelector('input[type="number"]').value,
    size: document.querySelector("select").value,
    image: "image/products/f7.jpg",
    incart: 0
  },
  {
    name: "Women's Cat Print Blouse",
    price: 899.99,
    quantity: document.querySelector('input[type="number"]').value,
    size: document.querySelector("select").value,
    image: "image/products/f8.jpg",
    incart: 0
  },
  {
    name: "Men's Fashion Shirts",
    price: 679.99,
    quantity: document.querySelector('input[type="number"]').value,
    size: document.querySelector("select").value,
    image: "image/products/n1.jpg",
    incart: 0
  },
  {
    name: "Men's Fashion Long Sleeves Shirt",
    price: 679.99,
    quantity: document.querySelector('input[type="number"]').value,
    size: document.querySelector("select").value,
    image: "image/products/n2.jpg",
    incart: 0
  },
  {
    name: "Men's Fashion Long Sleeves Shirtt",
    price: 679.99,
    quantity: document.querySelector('input[type="number"]').value,
    size: document.querySelector("select").value,
    image: "image/products/n3.jpg",
    incart: 0
  },
  {
    name: "Men's Fashion Shirts",
    price: 899.99,
    quantity: document.querySelector('input[type="number"]').value,
    size: document.querySelector("select").value,
    image: "image/products/n4.jpg",
    incart: 0
  },
  {
    name: "Men's Fashion Long Sleeves Shirt",
    price: 679.99,
    quantity: document.querySelector('input[type="number"]').value,
    size: document.querySelector("select").value,
    image: "image/products/n5.jpg",
    incart: 0
  },
  {
    name: "Men's Fashion Shorts",
    price: 999.99,
    quantity: document.querySelector('input[type="number"]').value,
    size: document.querySelector("select").value,
    image: "image/products/n6.jpg",
    incart: 0
  },
  {
    name: "Men's Khaki Long Sleeves Shirt",
    price: 899.99,
    quantity: document.querySelector('input[type="number"]').value,
    size: document.querySelector("select").value,
    image: "image/products/n7.jpg",
    incart: 0
  },
  {
    name: "Men's Fashion Shirts",
    price: 899.99,
    quantity: document.querySelector('input[type="number"]').value,
    size: document.querySelector("select").value,
    image: "image/products/n8.jpg",
    incart: 0
  },
];


for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers();
  });
}

// function cartNumbers() {
//   let productNumbers = localStorage.getItem('cartNumbers');
//   productNumbers = parseInt(productNumbers);
  

//   if (productNumbers) {
//     localStorage.setItem('cartNumbers', productNumbers + 1)
//   } else {
//     localStorage.setItem('cartNumbers', 1)
//     document.querySelector('.cart span').textContent = productNumbers + 1;
//   }
// };

//   localStorage.setItem("cartNumbers", 1);

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers')

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
  
    // Check if the value is a valid number string
    if (productNumbers && !isNaN(productNumbers)) {
      productNumbers = parseInt(productNumbers);
      productNumbers++;
    } else {
      productNumbers = 1;
    }
  
    localStorage.setItem('cartNumbers', productNumbers);
    document.querySelector('.cart span').textContent = productNumbers;
  }

  onLoadCartNumbers();

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
