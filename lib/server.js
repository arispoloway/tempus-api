
var api = require("./api");
var models = require("./models/models");


async function serverList() {
    var r = await api.tempus_api_request("servers/statusList");
    return r.map((x) => new models.ServerOverview(x));
}

async function serverOverview(id) {
    var r = await serverList();
    return r.find((x) => (x.server_info.id === id));
}

async function serverDemos(id) {
    var r = await api.tempus_api_request("servers/" + id + "/demos");
    return r.map((x) => new models.DemoInfo(x));
}


Object.assign(module.exports, {
    serverOverview,
    serverList,
    serverDemos,
});