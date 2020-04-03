let express = require('express');
let router = express.Router();

let index = 1;
const shows = require('../../data/shows');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(shows);
});

router.post('/', function(req, res, next) {
    const body = req.body;
    body.id = ++index;
    shows.push(body);
    res.send(body);
})

module.exports = router;
