// Happy coding guys
const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes/index');


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // ini untuk baca request body, kalau gk di pasang maka nanti undefined


app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})