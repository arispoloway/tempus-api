var api = require("./api");
var models = require("./models/models");


async function playerStats(id) {
    var r = await api.tempus_api_request("players/id/" + id + "/stats");
    return new models.PlayerStats(r);
}


Object.assign(module.exports, {
    playerStats
});