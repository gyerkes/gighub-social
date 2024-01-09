const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars');


router.engine('handlebars', exphbs());
router.set('view engine', 'handlebars');


router.set('views', path.join(__dirname, '../views'));


const bands = require('./bandRoutes');


router.use('/bands', bands);


router.get('/', (req, res) => {

  res.render('index', { name: 'World' });
});

module.exports = router;