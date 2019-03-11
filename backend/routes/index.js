var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const config = require('../config');
const connection = mysql.createConnection(config.config);
connection.connect();
const bcrypt = require('bcrypt-nodejs');

const moviePoster = `01ea2102421546c752e7cfc8ec078b18f2f9b76e`
const axios = require("axios");

// Send data to database via POST
router.post('/login', (req, res, next) => {
  console.log(req.body)
  const email = req.body.email;
  const password = req.body.password;
  const passwordQuery = `SELECT * FROM users WHERE email = ?`
  connection.query(passwordQuery, [email], (err, results) => {
    if (err) {
      throw error;
    } else {
      if (results.length === 0) {
        // Two options to give user: Redirect to registration or inform user they are not in our system.
        res.json({
          message: "invalidUser",
        });
      } else {
        const passwordMatch = bcrypt.compareSync(password, results[0].password)
        if (!passwordMatch) {
          res.json({
            message: "wrongPassword",
          })
        } else {
          //possible sessions
          res.json({
            message: "welcome"
          })
        }
      }

    };
  })
});

router.post('/register', (req, res) => {
  console.log('route hit')
  const email = req.body.email
  console.log('======================')
  const hashedPassword = bcrypt.hashSync(req.body.password)
  console.log('======================')
  console.log('route hit')
  const selectQuery = `SELECT * FROM users WHERE email = ?;`
  connection.query(selectQuery, [email], (error, results) => {
    if (error) {
      throw error
    } else if (results.length > 0) {
      // email already in system
      res.json({
        msg: "emailTaken"
      })
    } else {
      const insertQuery = `INSERT INTO users(email, password)
        VALUES (?, ? );`
      connection.query(insertQuery, [email, hashedPassword], (error, results) => {
        if (error) {
          throw error
        } else {
          res.json({
            msg: 'regSuccess'
          })
        }
      })
    }
  })
})

router.post('/search',(req, res)=>{
  const movieTitle = req.body.movieTitle;
  request.get(searchUrl,(error,response,body)=>{
    const parsedData = JSON.parse(body);
    res.render('now_playing',{
      moviePoster,
      parsedData: parsedData.results
    });
  });
});


router.get('/getPopMovies', (req,res)=>{
  const movieURL = `https://api.themoviedb.org/3/discover/movie?api_key=${config.movieApi}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
  axios.get(movieURL)
  .then((results)=>{
    console.log("+++++++++++++++++++++++++" +results.data)
    res.json(results.data.results)
  })
  .catch((error)=>{
    console.log(error)
  });
})


module.exports = router;
