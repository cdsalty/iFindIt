var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const config = require('../config');
const connection = mysql.createConnection(config);
connection.connect();
const bcrypt = require('bcrypt');

// Send data to database via POST
router.post('/login', (req, res, next)=>{
  console.log(req.body)
  const email = req.body.email;
  const password = req.body.password;
  const passwordQuery = `SELECT * FROM users WHERE email = ?`
  connection.query(passwordQuery, [email], (err, results)=>{
    if (err){
     throw error;
    }else {
      if (results.length === 0) {
        // Two options to give user: Redirect to registration or inform user they are not in our system.
        res.json({
          message: "invalidUser",
        });    
      }else{
        const passwordMatch = bcrypt.compareSync(password, results[0].password)
        if (!passwordMatch){
          res.json({
            message: "wrongPassword",
          })
        }else{
          //possible sessions
          res.json({
            message: "welcome"
          })
        }
      }
      
    };
  })
});


module.exports = router;
