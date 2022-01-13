/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();


module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT description FROM tasks`)
    .then(data => {
      const tasks = data.rows;
      console.log("hello");
    })
    .catch(err => {
      res
      .status(500)
      .json({ error: err.message });
    });

    
  });
  
  return router;
};











