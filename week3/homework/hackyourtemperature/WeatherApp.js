const express = require("express")
const app = express()
const path = require("path")
const bodyParser = require('body-parser')
//  Handlebars
const expressHbs = require('express-handlebars');
app.engine(
  'hbs',
  expressHbs({
    defaultLayout: 'main',
    extname: 'hbs'
  })
);
app.set('view engine', 'hbs');
// local
const homeRouter = require("./routes/homeR")
// const getWeatherRouter = require("./routes/homeR")

// 

// express use
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 
app.use(homeRouter)
// app.use(getWeatherRouter)


// error routing
app.use((req, res, next) => {
  res.status(404).render('404', { 
    pageTitle: 'Page Not Found', 
    pageStyle: '/css/404.css'
  });
  console.error(new Error('Not Found'))
})
module.exports = app;