const path = require('path');
const express = require('express');
const routes = require('./routes');
const session = require('express-session');
const exphbs = require('express-handlebars');
const autocomplete = require('autocompleter');

const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sess = {
  secret: 'Super secret secret',
  resave: false,
  saveUninitialized: false,
};

app.use(session(sess));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
 });

// hosts our front end. very important.
 app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html');
  });
  app.get('/bands', function(req, res){
    res.sendFile(__dirname + '/views/bands.html');
    });
  app.get('/bandaccount', function(req, res){
    res.sendFile(__dirname + '/views/bandaccount.html');
  });
  app.get('/bandsearch', function(req, res){
    res.sendFile(__dirname + '/views/bandsearch.html');
  });
//serves up the scripts folder for javascript files
  app.use("/scripts", express.static(__dirname + '/scripts'));
//note, when referencing in html, do not put stylesheets in the path because express already knows to look in the folder.
  app.use(express.static(path.join(__dirname, '/public')));
  // app.use("/content", express.static(__dirname + '/content'));
  