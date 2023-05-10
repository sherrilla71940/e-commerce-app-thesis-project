import { Sequelize, Op, Model, DataTypes } from "sequelize";
import sequelize from "../database/db-connection";
// import sequelize from "sequelize";
// import * from "../Users/aaronsherrill/Documents/codeworks/senior/projects/senior-projects/thesis-project/e-commerce-app-thesis-project/global-types/index";
import { type User } from "../../../global-types/index";

const UserModel = sequelize.define("User", {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
});

// could also sync all models at the same time, but afraid that if I do that in index.ts it could potentially cause circular dependecies
(async () => await UserModel.sync())();

export default UserModel;
