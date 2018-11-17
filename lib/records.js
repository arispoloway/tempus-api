var api = require("./api");
var models = require("./models/models");

async function mapRecords(map_name, type, zone, start=0, limit=50) {
    var url = "maps/name/" + map_name + "/zones/typeindex/" + type + "/";
    if (type === "map")
        url = url + "1/";
    else 
        url = url + zone + "/";
    url = url + "records/list";
    let r = await api.tempus_api_request(url, {limit, start});
    return new models.RecordListing(r, map_name);
}

async function mapTime(map_name, c, number){
    var r = await mapRecords(map_name, "map", 1, number, 1);
    if (c === 'd') {
        return r.demoman[0];
    } else if (c === 's') {
        return r.soldier[0];
    }
}

async function courseTime(map_name, course, c, number) {
    var r = await mapRecords(map_name, "course", course, number, 1);
    if (c === 'd') {
        return r.demoman[0];
    } else if (c === 's') {
        return r.soldier[0];
    } 
}

async function bonusTime(map_name, bonus, c, number) {
    var r = await mapRecords(map_name, "bonus", bonus, number, 1);
    if (c === 'd') {
        return r.demoman[0];
    } else if (c === 's') {
        return r.soldier[0];
    } 
}

async function mapWR(map_name, c) {
    return await mapTime(map_name, c, 1);
}

async function courseWR(map_name, course, c) {
    return await courseTime(map_name, course, c, 1);
}

async function bonusWR(map_name, bonus, c) {
    return await bonusTime(map_name, bonus, c, 1);
}

async function recordOverview(id) {
    let r = await api.tempus_api_request("records/id/" + id + "/overview");
    return new models.RecordOverview(r);
}


Object.assign(module.exports, {
    mapRecords,
    mapWR,
    recordOverview,
    mapWR,
    courseWR,
    bonusWR,
    mapTime,
    courseTime,
    bonusTime,
});