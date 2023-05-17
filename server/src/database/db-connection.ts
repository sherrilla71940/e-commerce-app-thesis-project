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
  database: "postgres",
  dialect: "postgres",
  username: "postgres",
  password: "sz240f",
  logging: false,
  // models: [__dirname + '/models'], // or [Player, Team],
});

export default sequelize;
