var express = require('express');
var router = express.Router();

/* GET datakaryawan. */
router.get('/datakaryawan', function(req, res) {
  var db = req.db;
  var collection = db.get('datakaryawan');
  collection.find({},{},function(e,docs){
    res.json(docs);
  });
});

module.exports = router;