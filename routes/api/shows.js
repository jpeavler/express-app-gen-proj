let express = require('express');
let router = express.Router();

let index = 1;
const shows = require('../../data/shows');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const results = shows.getShows();
  res.send(results);
});

router.post('/', function(req, res, next) {
  const results = shows.addShow(req);  
  res.send(results);
})

router.put('/', function(req, res, next) {
  const results = shows.updateShow(req);
  res.send(results);
})

router.patch('/', function(req, res, next) {
  const results = shows.updateShowPortion(req);
  res.send(results);
})

router.delete('/:id', function(req, res, next) {
  const results = shows.removeShow(req.params.id);
  res.send(results);
})
module.exports = router;
