import { Table, Column, Model, HasMany } from "sequelize-typescript";
import { type UserType } from "../user";
import Product from "./product-model";
import TransactionBasket from "./transactionBasket-model";
// uid going to be sent from firebase, so not optional
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
}

export default User;
