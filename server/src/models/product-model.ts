import sequelize from "../database/db-connection";
import { Table, Column, Model, HasMany } from "sequelize-typescript";
import { type ProductType } from "../product";

@Table
class Product extends Model<ProductType, ProductType> {
  @Column({ primaryKey: true })
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

(async () => await Product.sync())();

export default Product;
