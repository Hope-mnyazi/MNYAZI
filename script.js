// Add JavaScript functionality here, if needed
// For example, handling interactions like adding products to cart
// You can use libraries like jQuery for more complex interactions
// This example is intentionally left blank for simplicity

let products = [
    { id: 1, name: 'Product 1', price: 29.99, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 19.99, image: 'product2.jpg' },
    // Add more products here
];

let cart = [];

// Display products on the page
function displayProducts() {
    const productsContainer = document.getElementById('products');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productsContainer.appendChild(productElement);
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

// Update cart display
function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(li);
        total += item.price;
    });

    document.getElementById('cart-total').textContent = total.toFixed(2);
}

// Checkout function
function checkout() {
    alert('Thank you for your purchase!');
    cart = [];
    updateCart();
}

// Call displayProducts when the page is loaded
window.onload = displayProducts;
