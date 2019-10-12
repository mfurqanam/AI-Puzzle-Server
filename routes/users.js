var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(
	[{id:1,username: 'furqan',age : 25}]

);
});

router.post('/',function(req,res){
    alert('poka');
});

module.exports = router;
