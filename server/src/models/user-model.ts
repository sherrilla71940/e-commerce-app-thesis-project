// import { Sequelize, Op, Model, DataTypes } from "sequelize";
// above from original sequelize docs
import sequelize from "../database/db-connection";
// import sequelize from "sequelize";
import { Table, Column, Model, HasMany } from "sequelize-typescript";
import { type UserType } from "../user";

// const UserModel = sequelize.define("User", {
//   // Model attributes are defined here
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   lastName: {
//     type: DataTypes.STRING,
//     // allowNull defaults to true
//   },
// });

// uid going to be sent from firebase, so not optional
@Table
class User extends Model<UserType, UserType> {
  @Column({ primaryKey: true })
  id: string;
  @Column
  email: string;
  @Column
  name: string;
  @Column
  password: string;
  @Column
  isSeller: boolean;
}
// could also sync all models at the same time, but afraid that if I do that in index.ts it could potentially cause circular dependecies

sequelize.addModels([User]);

(async () => await User.sync({ alter: true }))();

export default User;
