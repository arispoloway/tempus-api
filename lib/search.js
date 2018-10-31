var api = require("./api");
var models = require("./models/models");


async function searchPlayersAndMaps(search) {
    var r = await api.tempus_api_request("search/playersAndMaps/" + search);
    return {
        players: r.players.map((x) => new models.Player(x.name, x.id, x.steamid)),
        maps: r.maps.map((x) => new models.Map(x.name)),
    };
}


Object.assign(module.exports, {
    searchPlayersAndMaps,
});