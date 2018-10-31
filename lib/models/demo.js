var tempus = require('../tempus');
var player = require('./player');
var zones = require('./zones');
var records = require('./records');
var server = require('./server');
var map = require('./map');

class Demo {
    constructor(id) {
        this.id = id;
    }

    async toDemoOverview() {
        return await tempus.demoOverview(this.id);
    }
}

class DemoInfo extends Demo {
    constructor(json) {
        super(json.id)
        Object.assign(this, json);
        this.server = new server.Server(json.server_id);
        this.map = new map.Map(json.mapname);
    }
}

class DemoRunListing {
    constructor(json, map_name) {
        Object.assign(this, json.map((x) => new records.Record(x, map_name, x.zone_info)));
    }
}

class DemoOverview extends DemoInfo {
    constructor(json) {
        super(json.demo_info);
        this.server_info = new server.ServerInfo(json.server_info);
        this.runs = new DemoRunListing(json.demo_runs, this.mapname);
    }

}

module.exports = {
    Demo,
    DemoInfo,
    DemoOverview,
}