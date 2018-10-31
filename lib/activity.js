var api = require("./api");
var models = require("./models/models");


async function getActivity() {
    var r = await api.tempus_api_request("activity");
    return new models.ActivityListing(r);
}


Object.assign(module.exports, {
    getActivity,
});