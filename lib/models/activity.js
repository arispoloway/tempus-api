var tempus = require('../tempus');
var records = require('./records');


class ActivityListing {
    constructor(json) {
        this.map_tops = json.map_tops.map((x) => new records.Record({...x.record_info, player_info: x.player_info}, x.map_info.name, x.zone_info));
        this.course_wrs = json.course_wrs.map((x) => new records.Record({...x.record_info, player_info: x.player_info}, x.map_info.name, x.zone_info));
        this.map_wrs = json.map_wrs.map((x) => new records.Record({...x.record_info, player_info: x.player_info}, x.map_info.name, x.zone_info));
        this.bonus_wrs = json.bonus_wrs.map((x) => new records.Record({...x.record_info, player_info: x.player_info}, x.map_info.name, x.zone_info));
    }
}


module.exports = {
    ActivityListing,
}