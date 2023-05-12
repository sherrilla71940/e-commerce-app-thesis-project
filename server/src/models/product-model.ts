import sequelize from "../database/db-connection";
import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { type ProductType } from "../../../global-types/index";
import User from "./user-model";

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
  @Column
  sellerId: string;

  @Column
  quantity: number;

  @Column
  pictureUrl: string;

  @BelongsTo(() => User)
  seller: User;
}

// sequelize.addModels([Product]);

// (async () => await Product.sync({ force: true }))();

export default Product;
