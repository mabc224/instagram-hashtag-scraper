const express = require('express');
const router = express.Router();
const instagram = require('./util/instagram');
const defaults = require('./../config/defaults');

/* GET home page. */
router.get('/', async function(req, res, next) {
    const _limit = req.query.limit ? req.query.limit : defaults.INSTAGRAM_DEFAULT_FIRST;
    const _recent = req.query.recent ? req.query.recent === '1' : false;
    const _hashtag = defaults.INSTAGRAM_DEFAULT_HASHTAG;

    console.log('Tag ' + _hashtag);
    console.log('Record Limit ' + _limit);
    console.log('Recent records ' + _recent);


    res.send(await instagram(_hashtag, _limit, _recent));
});

router.get('/favicon.ico', (req, res) => res.status(204));

router.get('/:tag', async function(req, res, next) {
    const _limit = req.query.limit ? req.query.limit : defaults.INSTAGRAM_DEFAULT_FIRST;
    const _recent = req.query.recent ? req.query.recent === '1' : false;
    const _hashtag = req.params.tag;

    console.log('Tag ' + _hashtag);
    console.log('Record Limit ' + _limit);
    console.log('Recent records ' + _recent);

    res.send(await instagram(_hashtag, _limit, _recent));
});

module.exports = router;