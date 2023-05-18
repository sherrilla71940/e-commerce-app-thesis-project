import { Table, Column, Model, HasMany, HasOne } from "sequelize-typescript";
import { type UserType } from "../user";
import Product from "./product-model";
import TransactionBasket from "./transactionBasket-model";
import ShoppingCart from "./shopping-cart-model";
// import { ShoppingCart } from "./models";
// uid going to be sent from firebase, so not optional
import { type ShoppingCartType } from "../../../global-types";
@Table
class User extends Model<UserType> {
  @Column({ primaryKey: true })
  id!: string;

  @Column
  email!: string;

  @Column
  name!: string;

  @Column
  password!: string;

  @Column
  isSeller!: boolean;

  @HasMany(() => Product)
  products!: Product[];

  @HasMany(() => TransactionBasket)
  transactions!: TransactionBasket[];

  @HasOne(() => ShoppingCart, {
    onDelete: "CASCADE",
  })
  shoppingCart: ShoppingCartType;
}

export default User;
