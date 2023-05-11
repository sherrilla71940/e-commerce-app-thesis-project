import { Sequelize } from "sequelize";
// IIFE Immediate Invoked Function Expression

const sequelize = new Sequelize("thesis", "aaronsherrill", "", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
