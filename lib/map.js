
var api = require("./api");
var models = require("./models/models");


async function mapOverview(name) {
    var r = await api.tempus_api_request("maps/name/" + name + "/fullOverview")
    return new models.MapOverview(r);
    // TODO error handling
}


async function detailedMapList() {
    var r = await api.tempus_api_request("maps/detailedList");
    return (r.map((x) => new models.MapDetail(x)));
}


Object.assign(module.exports, {
    mapOverview,
    detailedMapList
});