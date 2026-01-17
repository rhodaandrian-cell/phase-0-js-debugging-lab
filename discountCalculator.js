function calculateDiscountedPrice(quantity, pricePerItem) {
    let totalPrice = 0;
    debugger; // pause here to check totalPrice (it will be 0 now)

    for (let i = 0; i < quantity; i++) { 
        totalPrice += pricePerItem;
    }

    if (quantity >= 10) {
        totalPrice *= 0.9;
    }

    return totalPrice;
}

// Test calls
console.log(calculateDiscountedPrice(5, 100));
console.log(calculateDiscountedPrice(10, 100));

module.exports = calculateDiscountedPrice;