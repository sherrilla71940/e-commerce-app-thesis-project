import { app, port } from "./app";
import { Sequelize } from "sequelize";
// IIFE Immediate Invoked Function Expression
(async function bootstrap() {
  // await db.sequelize.sync();
  app.listen(3000, async () => {
    try {
      const sequelize = new Sequelize("thesis", "aaronsherrill", "", {
        host: "localhost",
        dialect: "postgres",
      });
      await sequelize.authenticate();
      console.log("Successful connection to thesis database in postgres!");
      console.log(`Express is listening at http://localhost:${port} 🚀`);
    } catch (e: unknown) {
      if (e instanceof Error) console.log(e.message);
      else {
        console.log("ran into an error in db or server connection");
      }
    }
  });
})();
