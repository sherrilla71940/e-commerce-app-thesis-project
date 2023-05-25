import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  HasMany,
  DataType,
} from "sequelize-typescript";
import { type ProductType } from "../../../global-types/index";
import User from "./user-model";
import TransactionBasketProduct from "./transactionBasketProduct-model";
import ShoppingCartProduct from "./shopping-cart-product-model";

@Table
class Product extends Model<ProductType> {
  @Column({ primaryKey: true, autoIncrement: true })
  id!: number;

  @Column
  name!: string;

  @Column
  category!: string;

  @Column
  price!: number;

  @ForeignKey(() => User)
  @Column({ allowNull: true })
  sellerId: string;

  @Column
  quantity!: number;

  @Column
  pictureUrl!: string;

  @BelongsTo(() => User)
  seller: User | null;

  @HasMany(() => TransactionBasketProduct)
  basketProducts: TransactionBasketProduct[];

  @HasMany(() => ShoppingCartProduct, {
    onDelete: "CASCADE",
  })
  shoppingCartProducts: ShoppingCartProduct[];
}

export default Product;
