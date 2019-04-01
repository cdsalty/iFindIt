var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const config = require('../config');
const connection = mysql.createConnection(config.config);
connection.connect();
const bcrypt = require('bcrypt-nodejs');
const axios = require("axios");
const scraper = require("../GoogleScrape copy/index");

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
        message: "emailTaken"
      })
    } else {
      const insertQuery = `INSERT INTO users(email, password)
        VALUES (?, ? );`
      connection.query(insertQuery, [email, hashedPassword], (error, results) => {
        if (error) {
          throw error
        } else {
          res.json({
            message: 'regSuccess'
          })
        }
      })
    }
  })
})

router.post('/search',(req, res)=>{
    console.log(req.body)
    const movieTitle = req.body.movieTitle
    const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&language=en-US&query=${movieTitle}&page=1&include_adult=false`
    axios.get(movieUrl)
    .then((results)=>{
      // console.log(results.data)
      res.json(results.data)
    })
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


router.post('/scraperResults',(req, res)=>{
  const scraperQuery = req.body.scrapeQuery;
  console.log(scraperQuery)
  const results = scraper(scraperQuery)
  console.log("results inside promise " + results)
  results.then((results)=>{

    const search = {
      results
    }

    res.json(search)
  })
})

  // router.post('/scraperResults', (req,res)=>{
  //   const scrapeQuery = req.body.scrapeQuery;
  //   console.log(scrapeQuery)
  //   async ()=>{
  //     console.log("entered async")
  //     const scrapeResults = scraper(scrapeQuery)
  //     console.log("scrapeResults " +scrapeResults)
  //     res.json("route ended " + scrapeResults)
  //   }
    
  // })



module.exports = router;
