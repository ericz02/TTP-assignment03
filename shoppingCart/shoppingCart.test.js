const shoppingCart = require('./shoppingCart');

describe('shoppingCart', () => {
    test('Add item to cart', () => {
        expect(shoppingCart.addToCart('apple', 1)).toBe('apple');
    });
    test('Remove item from cart', () => {
        expect(shoppingCart.removeFromCart('apple', 1)).toBe('apple');
    });
    test('Calculate total from cart', () => {
        expect(shoppingCart.calculateTotal()).toBe(0);
    });
})
