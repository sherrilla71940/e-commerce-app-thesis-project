import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { type TransactionBasketType } from "../../../global-types/index";
import User from './user-model';

@Table
class TransactionBasket extends Model<TransactionBasketType> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => User)
  @Column
  buyerId: string;

  @Column
  date: number;

  @BelongsTo(() => User)
  buyer: User;
}

export default TransactionBasket;
