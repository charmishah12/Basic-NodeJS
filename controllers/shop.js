const Product = require("../models/product");
const CartProduct = require("../models/cart-product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    res.render("shop/product-detail", {
      product: product,
      pageTitle: product.title,
      path: "/products",
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

exports.getCart = (req, res, next) => {
  CartProduct.fetchAll((cartProducts) => {
     res.render("shop/cart", {
      cartProducts: cartProducts,
      pageTitle: 'Cart',
      path: "/cart",
    });
  })
};

exports.postCart = (req, res, next) => {
  productId = req.body.productId;
  addToCart = req.body.addToCart;
  console.log(addToCart, req.body)
  if(addToCart === 'true'){
    console.log("entered")
    Product.findById(productId, (product) => {
    console.log("Product details", product)
    const id = product.id;
    const title = product.title;
    const imageUrl = product.imageUrl;
    const description = product.description;
    const price = product.price;
    const cartProduct = new CartProduct(id, title, imageUrl, description, price);
    cartProduct.save();
  });
  } else {
    CartProduct.fetchAll((cartProducts) => {
      // console.log("Cart Products details", cartProducts)
      const cartProductIndex = cartProducts.findIndex(cp => cp.id === productId)
      console.log("Cart Product Index", cartProductIndex)
      delete cartProducts[cartProductIndex]
    })
  }
  
  res.redirect('/cart')

};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
