import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo
} from "sequelize-typescript";
import { type TransactionBasketProductType } from "../../../global-types/index";
import TransactionBasket from "./transactionBasket-model";
import Product from "./product-model";

@Table
class TransactionBasketProduct extends Model<TransactionBasketProductType> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => TransactionBasket)
  @Column
  transactionId: number;

  @ForeignKey(() => Product)
  @Column
  productId: number;

  @Column
  quantity: number;

  @BelongsTo(() => TransactionBasket)
  transaction: TransactionBasket;

  @BelongsTo(() => Product)
  product: Product;
}

export default TransactionBasketProduct;