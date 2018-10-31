
var author = require('./author');
var map = require('./map');
var runs = require('./runs');
var tiers = require('./tiers');
var video = require('./video');
var zones = require('./zones');

module.exports = {
    ...author,
    ...map,
    ...runs,
    ...tiers,
    ...video,
    ...zones,
}