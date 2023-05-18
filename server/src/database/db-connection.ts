// import { Sequelize } from "sequelize";
// // IIFE Immediate Invoked Function Expression

// const sequelize = new Sequelize("thesis", "aaronsherrill", "", {
//   host: "localhost",
//   dialect: "postgres",
// });

// export default sequelize;

// use normal sequelize above, below uses sequelize-typescript

import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  database: "thesis",
  dialect: "postgres",
  // username: "postgres",
  // password: "sz240f",
  username: "aaronsherrill",
  password: "",
  logging: false,
  // models: [__dirname + '/models'], // or [Player, Team],
});

export default sequelize;
