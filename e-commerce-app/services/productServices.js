"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = exports.updateProduct = exports.removeProduct = exports.addProduct = void 0;
const addProduct = (products, newProduct) => {
    return [...products, newProduct];
};
exports.addProduct = addProduct;
const removeProduct = (products, productId) => {
    return products.filter(product => product.id !== productId);
};
exports.removeProduct = removeProduct;
const updateProduct = (products, updatedProduct) => {
    return products.map(product => product.id === updatedProduct.id ? updatedProduct : product);
};
exports.updateProduct = updateProduct;
const getProduct = (products) => {
    return products;
};
exports.getProduct = getProduct;
