import sequelize from "../database/db-connection";
import User from "./user-model";
import Product from "./product-model";
import ShoppingCart from './shopping-cart-model'



sequelize.addModels([User, Product, ShoppingCart]);

(async () => await sequelize.sync({ alter: true }))();

export { User, Product, ShoppingCart };

