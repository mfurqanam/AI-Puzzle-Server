var express = require('express');
var router = express.Router();
var fs = require('fs')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(
	[{id:1,username: 'furqan',age : 25}]

);
});

router.post('/',function(req,res){
 // console.log(req);
  let base64Image = req.body.base64.split(';base64,').pop();
  //console.log(req.body.name);
  fs.writeFile( "./UploadImages/" + req.body.name + req.body.type, base64Image, {encoding: 'base64'}, function(err) {
   // console.log(req);
});
res.send('OK');
});

module.exports = router;
