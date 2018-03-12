var express = require('express');
var router = express.Router();
var instagram = require('./util/instagram');
const defaults = require('./../config/defaults');
const _hashtag = defaults.INSTAGRAM_DEFAULT_HASHTAG;

/* GET home page. */
router.get('/', async function(req, res, next) {
 res.send (await instagram( _hashtag ));
});

router.get('/:tag', async function(req, res, next) {
 res.send (await instagram(req.params.tag ? req.params.tag: _hashtag ));
});

module.exports = router;
