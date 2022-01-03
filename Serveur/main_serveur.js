const express = require('express')
const mysql = require('mysql'); 
const app = express()
const port = 3000

var con = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: process.env.dtb_password,
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to database!");
});

app.set("view engine", "ejs")

app.get('/', async (req, res) => {
  con.query("SELECT * FROM blagounettes;", (err, result, fields) => {
    if (err) throw err;
    console.log(result);
  })
  res.render("index", {message: "bonjour le monde"})
})

app.listen(port, () => {
  console.log(`Blagafac listening at http://localhost:${port}`)
})
