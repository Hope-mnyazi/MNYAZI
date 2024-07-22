let cartItems = [];

// Function to add item to cart
function addToCart(id, name, price) {
    const item = {
        id: id,
        name: name,
        price: price
    };
    cartItems.push(item);
    updateCart();
}

// Function to update cart display
function updateCart() {
    const cartElement = document.getElementById('cart-items');
    cartElement.innerHTML = '';
    let total = 0;

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartElement.appendChild(li);
        total += item.price;
    });

    document.getElementById('cart-total').textContent = total.toFixed(2);
}

// Function to simulate checkout
function checkout() {
    alert('Thank you for shopping with us!');
    cartItems = [];
    updateCart();
}
