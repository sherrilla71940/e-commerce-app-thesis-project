import { app, port } from "./app";
// IIFE Immediate Invoked Function Expression
(async function bootstrap() {
  // await db.sequelize.sync();
  app.listen(3000, () => {
    console.log(`Express is listening at http://localhost:${port} 🚀`);
  });
})();
