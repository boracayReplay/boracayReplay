/**
 * Created by free-lunch on 2017. 2. 3..
 */

var express = require('express')
  , router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;