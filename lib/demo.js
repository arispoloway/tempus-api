var api = require("./api");
var models = require("./models/models");


async function demoOverview(id) {
    var r = await api.tempus_api_request("demos/id/" + id + "/overview");
    return new models.DemoOverview(r);
}


Object.assign(module.exports, {
    demoOverview,
});