const express     = require("express");
const app         = express();
const path        = require("path");
const expressHbs  = require('express-handlebars');
const bodyParser  = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));
app.engine(
  'hbs',
  expressHbs({
    defaultLayout : 'main',
    extname       : 'hbs'
  })
);
app.set('view engine', 'hbs');
// routing
app.get   ('/', (req,res) => {
  res.render('home', {
    pageTitle: 'Home',
    pageStyle: '/css/home.css'
  })
});
app.post('/weather', (req,res) => {
  const nameOfCity = req.body.cityName;
  res.send(nameOfCity)
});
const port = 7777;
app.listen(port);
