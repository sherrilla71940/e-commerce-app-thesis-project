import sequelize from "../database/db-connection";
import User from "./user-model";
import Product from "./product-model";

sequelize.addModels([User, Product]);

(async () => await sequelize.sync({ alter: true }))();

export default { User, Product };
// export User;
// export Product;
