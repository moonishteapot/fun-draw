var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('canvas', { title: 'Canvas' });
});

module.exports = router;
