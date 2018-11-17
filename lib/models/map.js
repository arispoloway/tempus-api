var video = require('./video');
var zones = require('./zones');
var author = require('./author');
var tiers = require('./tiers');
var runs = require('./runs');
var tempus = require('../tempus');


class Map {
    constructor(name) {
        this.name = name;
    }

    async toMapOverview() {
        return tempus.mapOverview(this.name);
    }

    async getRecords(type, zone, start=0, limit=50) {
        return tempus.mapRecords(this.name, type, zone, start, limit);
    }

    async getMapWR(c) {
        return tempus.mapWR(this.name, c);
    }

    async getMapTime(c, number) {
        return tempus.mapTime(this.name, c, number);
    }

    async getCourseWR(course, c) {
        return tempus.courseWR(this.name, course, c);
    }

    async getCourseTime(course, c, number) {
        return tempus.courseTime(this.name, course, c, number);
    }

    async getBonusWR(bonus, c) {
        return tempus.bonusWR(this.name, bonus, c);
    }

    async getBonusTime(bonus, c, number) {
        return tempus.bonusTime(this.name, bonus, c, number);
    }
}

class MapInfo extends Map{
    constructor(id, name, zone_counts, tier_info, authors, videos){
        super(name);
        this.id = id;
        this.zone_counts = new zones.ZoneCounts(zone_counts);
        this.tiers = new tiers.Tiers(tier_info);
        this.authors = new author.AuthorList(authors);

        if (videos.soldier) {
            this.svid = new video.Video(videos.soldier, 'S');
        }
        if (videos.demoman) {
            this.dvid = new video.Video(videos.demoman, 'D');
        }
    }
}

class MapOverview extends MapInfo {
    constructor(json) {
        super(
            json.map_info.id, 
            json.map_info.name, 
            json.zone_counts, 
            json.tier_info, 
            json.authors,
            json.videos);

        this.date_added = json.map_info.date_added;

        this.demoman_runs = new runs.RunListing(json.demoman_runs, 'D');
        this.soldier_runs = new runs.RunListing(json.soldier_runs, 'S');
    }
}

class MapDetail extends MapInfo {
    constructor(json) {
        super(
            json.id, 
            json.name, 
            json.zone_counts, 
            json.tier_info, 
            json.authors, 
            json.videos);
    }
}

module.exports = {
    Map,
    MapDetail,
    MapOverview,
}