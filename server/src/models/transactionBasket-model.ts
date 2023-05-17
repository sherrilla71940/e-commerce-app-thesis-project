import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  HasMany,
} from "sequelize-typescript";
import { type TransactionBasketType } from "../../../global-types/index";
import User from "./user-model";
import TransactionBasketProduct from "./transactionBasketProduct-model";

@Table
class TransactionBasket extends Model<TransactionBasketType> {
  @Column({ primaryKey: true, autoIncrement: true })
  id!: number;

  @ForeignKey(() => User)
  @Column
  buyerId: string | null;

  // @Column
  // date!: Date;
  // commented out by aaron since sequelize already creates a createdAt automatically for us

  @BelongsTo(() => User)
  buyer!: User;

  @HasMany(() => TransactionBasketProduct)
  basketProducts!: TransactionBasketProduct[];
}

export default TransactionBasket;
