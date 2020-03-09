const express = require('express');
const router = express.Router();
const {responseSuccess, responseRedirect} = require('./restful');
const fs = require('fs');
const path = require('path')

router.get('/', function(req, res, next) {
  res.json(responseSuccess());
});

router.get('/generate', function(req, res, next) {
  let query = req.query;
  let dirname = path.resolve(__dirname, `../data/${query.type}/`);
  let filename = path.resolve(__dirname, `../data/${query.type}/${query.name}.json`);
  if(!fs.existsSync(dirname)) fs.mkdirSync(dirname);
  fs.writeFileSync(filename, JSON.stringify(query, null, '\t'));
  res.json(responseSuccess({}, 'Wait'));
});

router.get('*', function(req, res, next) {
  res.json(responseRedirect());
});
module.exports = router;
