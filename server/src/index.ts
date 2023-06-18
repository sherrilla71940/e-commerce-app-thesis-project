import { app, port } from "./app";
import sequelize from "./database/db-connection";
// import all models below so we can call sequelize.sync to sync them
// import UserModel from "./models/usersModel";
// IIFE Immediate Invoked Function Expression

(async function bootstrap() {
  // await db.sequelize.sync();
  app.listen(port, async () => {
    try {
      await sequelize.authenticate();
      // to sync models must import models first above
      // await sequelize.sync();
      // commented out above because it might cause a circular dependency, going to sync each model individually instead
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
