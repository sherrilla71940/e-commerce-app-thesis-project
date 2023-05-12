import sequelize from "../database/db-connection";
import User from "./user-model";
import Product from "./product-model";
import TransactionBasket from "./transactionBasket-model";
import TransactionBasketProduct from "./transactionBasketProduct-model";

sequelize.addModels([
  User,
  Product,
  TransactionBasket,
  TransactionBasketProduct,
]);

(async () => await sequelize.sync({ alter: true }))();

export { User, Product };
// export User;
// export Product;
