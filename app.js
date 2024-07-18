const express = require('express');
const session = require('express-session');
const routes = require('./routes/index');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'yourSecretKey',
  resave: false,
  saveUninitialized: true,
}));

app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
