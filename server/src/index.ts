import { app, port } from "./app";
import sequelize from "./database/db-connection";

(async function bootstrap() {
  // await db.sequelize.sync();
  app.listen(3000, async () => {
    try {
      // await sequelize.authenticate();
      // to sync models must import models first above
      // {force: true}
      await sequelize.sync({force: true});
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
