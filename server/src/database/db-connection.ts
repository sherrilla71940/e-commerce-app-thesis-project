import { Sequelize } from "sequelize";
// IIFE Immediate Invoked Function Expression

const sequelize = new Sequelize("thesis", "postgres", "12345", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
