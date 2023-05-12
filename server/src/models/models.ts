import sequelize from "../database/db-connection";
// import {
//   Table,
//   Column,
//   Model,
//   HasMany,
//   DataType,
//   ForeignKey,
//   BelongsTo,
// } from "sequelize-typescript";
// import type { UserType, ProductType } from "../../../global-types/index";
import User from "./user-model";
import Product from "./product-model";
import ShoppingCart from './shopping-cart-model'

// @Table
// export class User extends Model<UserType> {
//   @Column({ primaryKey: true })
//   id: string;

//   @Column
//   email: string;

//   @Column
//   name: string;

//   @Column
//   password: string;

//   @Column
//   isSeller: boolean;

//   @HasMany(() => Product)
//   products: Product[];
// }

// @Table
// export class Product extends Model<ProductType> {
//   @Column({ primaryKey: true, autoIncrement: true })
//   id: number;

//   @Column
//   name: string;

//   @Column
//   category: string;

//   @Column
//   price: number;

//   @ForeignKey(() => User)
//   @Column
//   sellerId: string;

//   @Column
//   quantity: number;

//   @Column
//   pictureUrl: string;

//   @BelongsTo(() => User)
//   seller: User;
// }

sequelize.addModels([User, Product, ShoppingCart]);

(async () => await sequelize.sync({ alter: true }))();

export default { User, Product };
// export User;
// export Product;
