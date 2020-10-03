const express     = require("express");
const app         = express();
const path        = require("path");
const expressHbs  = require('express-handlebars');
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')));
app.engine(
  'hbs',
  expressHbs({
    defaultLayout : 'main',
    extname       : 'hbs'
  })
);
app.set('view engine', 'hbs');


app.get   ('/'        , (req,res) => {
  res.render('home', {
    pageTitle: 'Home',
    pageStyle: '/css/home.css'
  })
});

const port = 7777;
app.listen(port);
