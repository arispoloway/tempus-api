var api = require("./api");
var models = require("./models/models");


/** type can be 'o', 'd', 's'
 *  Dont think start actually does anything, but on site
 */
async function getRanks(type, start=0) {
    url = "ranks/";
    if (type === 's') {
        url = url + "class/3";
    } else if (type === 'd') {
        url = url + "class/4";
    } else {
        url = url  + "overall"
    }
    var r = await api.tempus_api_request(url, {start});
    return {
        players: r.players.map((x) => new models.RankedPlayer(x)),
        count: r.count,
    };
}


Object.assign(module.exports, {
    getRanks
});