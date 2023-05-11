import sequelize from "../database/db-connection";
import { Table, Column, Model, HasMany, DataType } from "sequelize-typescript";
import { type ProductType } from "../../../global-types/index";

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
  @Column
  sellerId: string;
  @Column
  quantity: number;
  @Column
  pictureUrl: string;
}

sequelize.addModels([Product]);

(async () => await Product.sync({ alter: true }))();

export default Product;
