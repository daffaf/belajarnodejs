"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const productServices = __importStar(require("./services/productServices"));
const userServices = __importStar(require("./services/userServices"));
const orderServices = __importStar(require("./services/orderServices"));
const validate_1 = require("./utils/validate");
const productSchema_1 = require("./schemas/productSchema");
const userSchema_1 = require("./schemas/userSchema");
const orderSchema_1 = require("./schemas/orderSchema");
let products = [];
let users = [];
let orders = [];
const newProduct = {
    id: 1,
    name: "Laptop",
    description: "High performance laptop",
    price: 1500,
    category: "Electronics",
    stock: 100
};
if ((0, validate_1.validate)(newProduct, productSchema_1.productSchema)) {
    products = productServices.addProduct(products, newProduct);
}
else {
    console.log("Invalid Product Data");
}
const newUser = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    password: "securepassword",
    address: "123 Main St"
};
if ((0, validate_1.validate)(newUser, userSchema_1.userSchema)) {
    users = userServices.addUser(users, newUser);
}
else {
    console.log("Invalid User Data");
}
const newOrder = {
    id: 1,
    userId: 1,
    products: [{ productId: 1, quantity: 1 }],
    totalAmount: 1500,
    orderDate: new Date(),
    status: "pending"
};
const updatedProduct = {
    id: 1,
    name: "Laptop Gaming",
    description: "Highest performance laptop",
    price: 4500,
    category: "Electronics",
    stock: 100
};
if ((0, validate_1.validate)(newOrder, orderSchema_1.orderSchema)) {
    orders = orderServices.placeOrder(orders, newOrder);
}
else {
    console.log("Invalid Order Data");
}
console.log(productServices.getProduct(products));
// products = productServices.updateProduct(products, updatedProduct)
// console.log(productServices.getProduct(products));
console.log(userServices.getUser(users));
console.log(orderServices.getOrders(orders));
orders = orderServices.updateOrderStatus(orders, 1, "shipped");
console.log(orderServices.getOrders(orders));
