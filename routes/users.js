var express = require('express');
var router = express.Router();

/* GET Karyawan. */
router.get('/karyawan', function(req, res) {
  var db = req.db;
  var collection = db.get('karyawan');
  collection.find({},{},function(e,docs){
    res.json(docs);
  });
});

module.exports = router;