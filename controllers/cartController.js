const Product = require("../models/Product");
const Cart = require("../models/cart");
const { STATUS_CODE } = require("../constants/statusCode");

exports.addProductToCart = (request, response) => {
    const { name, description, price } = request.body;

    // Add new product
    const product = new Product(name, description, price);
    Product.add(product);

    // Add product to cart
    Cart.add(name);

    response.status(STATUS_CODE.FOUND).redirect("/products/new");
};

exports.getProductsCount = (request, response) => {
    const productsCount = Cart.getProductsQuantity();

    response.status(STATUS_CODE.OK).json({ count: productsCount });
};