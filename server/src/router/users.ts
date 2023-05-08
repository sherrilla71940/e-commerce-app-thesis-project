import express from 'express';

//import controllers

export default (router: express.Router) => {
  router.get('/', (req, res) => {
    res.send("what's up doc ?!");
  });
}