// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 3000;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "session",
    keys: [
      "b10783d2-24ed-4a30-9b84-9c10ea429bfd",
      "f56a87b1-5588-4f8a-beb0-3e1b06aa40e2",
    ],
  })
);




// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).


app.get("/", (req, res) => {
  if(!req.session.user_id) {
    res.render("index_logged_out");
  }
  
  db.query(`SELECT name, description FROM users
  JOIN tasks ON users.id = user_id`)
    .then(data => {

      const temp = {listings: data.rows, user: data.rows[7].name};
      
      res.render("index", temp);
    })
    .catch(err => {
      res
      .status(500)
      .json({ error: err.message });
    });
});
//--------------
app.post("/", (req, res) => {
  const user_id = req.session.user_id;
 const newTodo = req.body.text;
 db.query(`INSERT INTO tasks (user_id, description)
 VALUES($1, $2);`, [user_id, newTodo]) 
 .then(data => {

   res.redirect("/")
 })
 .catch(err => {
   console.log(err.message);
 })
})

//--------------
app.get("/login", (req, res) => {
  if(req.session.user_id) {
    res.redirect("/");
  }
  res.render("login");
});
//--------------
app.post('/login', (req, res) => {
 const email = req.body.email;
 db.query(`SELECT *, user_id, description FROM users 
 JOIN tasks ON users.id = user_id
 WHERE email = $1`, [email])
 .then(data => {
   console.log(data.rows);
    req.session.user_id = data.rows[0].id;
    const temp = {user: data.rows[0].name, listings: data.rows}
    res.render("index", temp);
 })
});
//---------------
app.get("/register", (req, res) => {
  if(req.session.user_id) {
    res.redirect("/");
  }
  res.render("register");
});
//---------------
app.post("/register", (req, res) => {

  const user = {
    name: req.body.username,
    email: req.body.email,
    password: req.body.password
  };
  db.query(`
  INSERT INTO users (name, email,password)
  VALUES ('${user.name}', '${user.email}', '${user.password}')
  `)
  .then(data => {
    res.redirect("/login");
  })
})
//--------------
app.post("/logout", (req, res) => {
  req.session = null;
  res.redirect("/");
});







app.listen(PORT, () => {
  console.log(`SmartListr listening on port ${PORT}`);
});



