const express = require('express')
const mysql = require('mysql'); 
const app = express()
const port = 3000

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.dtb_password
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.set("view engine", "ejs")

app.get('/', (req, res) => {
  res.render("index", {message: "bonjour le monde"})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
