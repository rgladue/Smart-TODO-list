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
  
  res.render("index");
});

app.post("/", (req, res) => {
  console.log(res.JSON.parse(data));
})

app.get("/login", (req, res) => {
  res.render("login");
});

app.post('/login', (req, res) => {
  console.log(res.body);
  res.redirect("/");
});

app.get("/register", (req, res) => {
  
  res.render("register");
});

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
    console.log(data);
  })
  
  res.redirect("/");
})







app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

