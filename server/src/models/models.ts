import sequelize from "../database/db-connection";
import User from "./user-model";
import Product from "./product-model";
import ShoppingCart from './shopping-cart-model'
import ShoppingCartProduct from './shopping-cart-product-model'



sequelize.addModels([User, Product, ShoppingCart, ShoppingCartProduct]);

(async () => await sequelize.sync({ alter: true }))();

export { User, Product, ShoppingCart, ShoppingCartProduct };

