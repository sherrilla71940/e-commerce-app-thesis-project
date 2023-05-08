// testing git workflow

import express from 'express'
import router from './router';
// import db from './database/db'

const app = express();
const port = 3000;

app.use('/', router());

// IIFE Immediate Invoked Function Expression
(async function bootstrap () {
  // await db.sequelize.sync();
  app.listen(3000, () => {
    console.log(`Express is listening at http://localhost:${port} 🚀`)
  });
})();