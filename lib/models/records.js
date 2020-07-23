var player = require('./player');
var tiers = require('./tiers');
var zones = require('./zones');
var map = require('./map');
var tempus = require('../tempus');
var demo = require('./demo');
var server = require('./server');

class ClassRecordListing {
    constructor(json, map_name, zone_info) {
        Object.assign(this, json.map((x) => new Record(x, map_name, zone_info)));
    }
}

class RecordListing {
    constructor(json, map_name) {
        this.map = new map.Map(map_name);
        this.tier_info = new tiers.Tiers(json.tier_info);
        this.zone_info = new zones.ZoneInfo(json.zone_info);
        this.demoman = new ClassRecordListing(json.results.demoman, map_name, this.zone_info);
        this.soldier = new ClassRecordListing(json.results.soldier, map_name, this.zone_info);
    }
}

class Record {
    constructor(json, map_name, zone_info) {
        Object.assign(this, json);
        this.player = new player.Player(
            json.player_info.name, 
            json.player_info.id, 
            json.player_info.steamid);
        this.map = new map.Map(map_name);
        this.zone_info = new zones.ZoneInfo(zone_info);
        if (json.zone_run_info){
            Object.assign(this, json.zone_run_info);
            this.server = new server.Server(this.server_id);
            this.demo = new demo.Demo(this.demo_id)

        } else {
            this.id = json.id;
            this.rank = json.rank;
            this.duration = json.duration;
        }
    }

    async toRecordOverview() {
        return await tempus.recordOverview(this.id);
    }
}

class RecordOverview extends Record {
    constructor(json) {
        super({
                ...json.record_info, 
                player_info: json.player_info
            }, 
            json.map_info.name, 
            json.zone_info);
        this.player = new player.Player(
            json.player_info.name,
            json.player_info.id,
            json.player_info.steamid,
        );
        this.map = new map.Map(json.map_info.name);
        this.zone_info = new zones.ZoneInfo(json.zone_info);
        this.tier_info = new tiers.Tiers(json.tier_info);
	if (json.demo_info) {
            this.demo_info = new demo.DemoInfo(json.demo_info);
	}
    }
}

module.exports = {
    ClassRecordListing,
    RecordListing,
    Record,
    RecordOverview,
}
