// scripts.js
document.addEventListener("DOMContentLoaded", function () {
  // Simulate fetching product data from the server
  const products = [
    { id: 1, name: "Product 1", price: 19.99 },
    { id: 2, name: "Product 2", price: 29.99 },
    { id: 3, name: "Product 3", price: 39.99 },
  ];

  const productList = document.getElementById("product-list");

  // Display products on the page
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productDiv);
  });
});

function addToCart(productId) {
  // Add logic to add the selected product to the shopping cart
  console.log(`Product ${productId} added to the cart`);
}
