const express = require('express')
const mysql = require('mysql'); 
const app = express()
const port = 3000
const parser = require('body-parser')

app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())

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
    res.render("index", {query_result: result})
  })
})

app.listen(port, () => {
  console.log(`Blagafac listening at http://localhost:${port}`)
})

app.post('/new_joke', function(req, res, next){
  // req.body object has your form values
  console.log(req.body.title);
  console.log(req.body.content);
  console.log(req.body);

  con.query(`INSERT INTO blagounettes (titre, contenu) VALUES ("${req.body.title}", "${req.body.content}")`)
  res.redirect("/");

});
