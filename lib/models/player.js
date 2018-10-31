var stats = require('./stats');
var zones = require('./zones');
var rank = require('./rank');
var tempus = require('../tempus');

class Player {
    constructor(name, id, steamid) {
        this.name = name;
        this.id = id;
        this.steamid = steamid;
    }

    async toPlayerStats() {
        return await tempus.playerStats(this.id);
    }
}

class PlayerStats extends Player {
    constructor(json) {
        super(json.player_info.name, json.player_info.id, json.player_info.steamid);
        this.country = json.player_info.country;
        this.country_code = json.player_info.country_code;
        this.first_seen = json.player_info.first_seen;
        this.last_seen = json.player_info.last_seen;
        this.wr_stats = new stats.Stats(json.wr_stats);
        this.pr_stats = new stats.Stats(json.pr_stats);
        this.top_stats = new stats.Stats(json.top_stats);
        this.zone_count = new zones.ZoneCounts(json.zone_count);
        this.class_rank_info = new rank.ClassRankInfo(json.class_rank_info);
        this.rank_info = new rank.RankInfo(json.rank_info);
        this.country_class_rank_info = new rank.ClassRankInfo(json.country_class_rank_info);
    }
}

module.exports = {
    Player,
    PlayerStats,
}