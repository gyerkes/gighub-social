const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars');
const path = require('path');


router.engine('handlebars', exphbs());
router.set('view engine', 'handlebars');


router.set('views', path.join(__dirname, '../views'));


const apiRoutes = require('./api');


router.use('/api', apiRoutes);


router.get('/', (req, res) => {

  res.render('index', { name: 'World' });
});

module.exports = router;