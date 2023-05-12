const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart-products.json"
);

const getCartProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      console.log("error-1");
      cb([]);
    } else {
      console.log("error-2", fileContent);
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class CartProduct {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    console.log("save");
    getCartProductsFromFile((products) => {
      console.log(this);
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  delete(id, cb){
    getCartProductsFromFile((CartProducts) => {
      // const 
    })
  }

  static fetchAll(cb) {
    getCartProductsFromFile(cb);
  }

  static findById(id, cb) {
    getCartProductsFromFile((products) => {
      const product = products.find((p) => p.id === id);
      cb(product);
    });
  }
};
