var api = require("./api");
var models = require("./models/models");

async function mapRecords(map_name, type, zone, limit=50) {
    var url = "maps/name/" + map_name + "/zones/typeindex/" + type + "/";
    if (type === "map")
        url = url + "1/";
    else 
        url = url + zone + "/";
    url = url + "records/list";
    var r = await api.tempus_api_request(url, {limit});
    return new models.RecordListing(r, map_name);
}

async function recordOverview(id) {
    var r = await api.tempus_api_request("records/id/" + id + "/overview");
    return new models.RecordOverview(r);
}


Object.assign(module.exports, {
    mapRecords,
    recordOverview,
});