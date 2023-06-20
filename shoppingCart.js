// initialize cart object as empty object
let cart = {};

function addToCart(item, quantity) {
    // if item already exists in cart, add quantity to existing quantity
    // else add item to cart with specified quantity
    if (cart.hasOwnProperty(item)) {
        cart[item] += quantity;
    } else {
        cart[item] = quantity;
    }
    // return item added to cart
    return item;
}

function removeFromCart(item, quantity) {
    // if item exists in cart, subtract quantity from existing quantity
    // else remove item from cart with specified quantity
    if (cart.hasOwnProperty(item)) {
        cart[item] -= quantity;
    } else {
        delete cart[item];
    }
    // return item removed from cart
    return item;
}

function calculateTotal () {
    // initialize total variable
    let total = 0;
    // iterate through cart object
    for (let item in cart) {
        // add item price * quantity to total
        total += (cart[item] * 1);
    }
    // return total
    return total;
}

module.exports = { addToCart, removeFromCart, calculateTotal };