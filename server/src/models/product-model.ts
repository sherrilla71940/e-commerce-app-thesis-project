import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  HasMany,
} from "sequelize-typescript";
import { type ProductType } from "../../../global-types/index";
import User from "./user-model";
import TransactionBasketProduct from "./transactionBasketProduct-model";
import ShoppingCartProduct from "./shopping-cart-product-model";

@Table
class Product extends Model<ProductType> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  name: string;

  @Column
  category: string;

  @Column
  price: number;

  @ForeignKey(() => User)
  @Column({ allowNull: true })
  sellerId: string;

  @Column
  quantity: number;

  @Column
  pictureUrl: string;

  @BelongsTo(() => User)
  seller: User;

  @HasMany(() => TransactionBasketProduct)
  basketProducts: TransactionBasketProduct[];

  @HasMany(() => ShoppingCartProduct)
  shoppingCartProduct: ShoppingCartProduct[];
}

export default Product;
