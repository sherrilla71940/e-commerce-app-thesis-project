import sequelize from "../database/db-connection";
import User from "./user-model";
import Product from "./product-model";

import TransactionBasket from "./transactionBasket-model";
import TransactionBasketProduct from "./transactionBasketProduct-model";
import ShoppingCart from "./shopping-cart-model";
import ShoppingCartProduct from "./shopping-cart-product-model";

sequelize.addModels([
  User,
  Product,
  TransactionBasket,
  TransactionBasketProduct,
  ShoppingCart,
  ShoppingCartProduct,
]);

(async () => await sequelize.sync({ alter: true }))();

export {
  User,
  Product,
  ShoppingCart,
  ShoppingCartProduct,
  TransactionBasket,
  TransactionBasketProduct,
};
