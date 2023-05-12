
// import { Sequelize, Op, Model, DataTypes } from "sequelize";
// above from original sequelize docs
import sequelize from "../database/db-connection";
// import sequelize from "sequelize";
import { Table, Column, Model, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import User from '../models/user-model';
import { type ShoppingCartType } from "../../../global-types";

// uid going to be sent from firebase, so not optional
@Table
class ShoppingCart extends Model<ShoppingCartType, ShoppingCartType> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => User)
  @Column
  userId: string;

  @BelongsTo(() => User)
  user: User;
}
// could also sync all models at the same time, but afraid that if I do that in index.ts it could potentially cause circular dependecies

// sequelize.addModels([ShoppingCart]);

// (async () => await ShoppingCart.sync({ force: true }))();

export default ShoppingCart;