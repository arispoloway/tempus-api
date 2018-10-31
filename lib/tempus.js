

var map = require('./map');
var player = require('./player');


Object.assign(module.exports, {
    ...map,
    ...player,
});