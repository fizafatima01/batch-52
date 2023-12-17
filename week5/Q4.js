"use strict";
function calculateDiscount(price) {
    return (price > 100) ? 0.1 : 0.05;
}
// Example usage
const productPrice = 120;
const discountPercentage = calculateDiscount(productPrice);
const discountedPrice = productPrice - (productPrice * discountPercentage);
console.log(discountedPrice);
