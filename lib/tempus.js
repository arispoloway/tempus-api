var map = require('./map');
var player = require('./player');
var records = require('./records');
var demo = require('./demo');
var server = require('./server');
var rank = require('./rank');
var search = require('./search');
var activity = require('./activity');
var models = require('./models/models');


Object.assign(module.exports, {
    ...map,
    ...player,
    ...records,
    ...demo,
    ...server,
    ...rank,
    ...search,
    ...activity,
    Map: models.Map,
    Server: models.Server,
    
});