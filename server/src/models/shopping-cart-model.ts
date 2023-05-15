
import { Table, Column, Model, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import User from '../models/user-model';
import { type ShoppingCartType } from "../../../global-types";
import { Product, ShoppingCartProduct } from "./models";

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

  @HasMany(() => ShoppingCartProduct)
  shoppingCartProducts: ShoppingCartProduct[];
}

export default ShoppingCart;