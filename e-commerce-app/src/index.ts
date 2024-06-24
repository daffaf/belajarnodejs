import { Product } from "./models/product";
import { User } from "./models/user";
import { Order } from "./models/order";
import * as productServices from "./services/productServices";
import * as userServices from "./services/userServices";
import * as orderServices from "./services/orderServices";
import { validate } from "./utils/validate";
import { productSchema } from "./schemas/productSchema";
import { userSchema } from "./schemas/userSchema";
import { orderSchema } from "./schemas/orderSchema";

let products : Product[] = [];
let users : User[] = [];
let orders : Order[] = [];

const newProduct : Product = {
    id: 1,
    name: "Laptop",
    description: "High performance laptop",
    price: 1500,
    category: "Electronics",
    stock: 100
}
if(validate (newProduct,productSchema)){
    products = productServices.addProduct(products,newProduct);
}else{
    console.log("Invalid Product Data");
}
const newUser : User = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    password: "securepassword",
    address: "123 Main St"
}
if(validate(newUser,userSchema)){
    users = userServices.addUser(users,newUser);
}else{
    console.log("Invalid User Data")
}
const newOrder : Order = {
    id: 1,
    userId: 1,
    products: [{ productId: 1, quantity: 1 }],
    totalAmount: 1500,
    orderDate: new Date(),
    status: "pending"
}
const updatedProduct : Product = {
    id: 1,
    name: "Laptop Gaming",
    description: "Highest performance laptop",
    price: 4500,
    category: "Electronics",
    stock: 100
}
if(validate(newOrder,orderSchema)){
    orders = orderServices.placeOrder(orders,newOrder);
}else{
    console.log("Invalid Order Data")
}
console.log(productServices.getProduct(products));
// products = productServices.updateProduct(products, updatedProduct)
// console.log(productServices.getProduct(products));
console.log(userServices.getUser(users));
console.log(orderServices.getOrders(orders));
orders = orderServices.updateOrderStatus(orders, 1, "shipped");
console.log(orderServices.getOrders(orders));