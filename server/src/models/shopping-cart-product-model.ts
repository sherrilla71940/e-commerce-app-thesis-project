import { Table, Column, Model, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import User from '../models/user-model';
import { type ShoppingCartProductType } from "../../../global-types";
import ShoppingCart from "./shopping-cart-model";
import Product from "./product-model";

// uid going to be sent from firebase, so not optional
@Table
class ShoppingCartProduct extends Model<ShoppingCartProductType, ShoppingCartProductType> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  productQuantity: number;

  @ForeignKey(() => ShoppingCart)
  @Column
  shoppingCartId: number;

  @ForeignKey(() => Product)
  @Column
  productId: number;

  @BelongsTo(() => ShoppingCart)
  shoppingCart: ShoppingCart;
}

export default ShoppingCartProduct;