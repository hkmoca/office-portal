var express = require('express');
var router = express.Router();
var io = require("socket.io");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('portal', { title: 'Portal NS :)' });
});


router.get("/trigger", function(req, res){

	io.emit("quiet");
	res.end();

});



module.exports = router;
