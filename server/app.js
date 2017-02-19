/**
 * Created by free-lunch on 2017. 2. 3..
 */

var firebase = require("firebase");
var express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use('/api', require('././index'));

app.listen(3000, function() {
  console.log('Listening on port ' + port)
});
