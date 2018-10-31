
var author = require('./author');
var map = require('./map');
var runs = require('./runs');
var tiers = require('./tiers');
var video = require('./video');
var zones = require('./zones');
var player = require('./player');
var stats = require('./stats');
var rank = require('./rank');
var records = require('./records');
var demo = require('./demo');
var server = require('./server');

module.exports = {
    ...author,
    ...map,
    ...runs,
    ...tiers,
    ...video,
    ...zones,
    ...player,
    ...stats,
    ...rank,
    ...records,
    ...demo,
    ...server,
}