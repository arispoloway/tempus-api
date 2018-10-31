
class ZoneCounts {
    constructor(json) {
        this.checkpoint = json.checkpoint;
        this.map = json.map;
        this.linear = json.linear;
        this.map_end = json.map_end;
        this.special = json.special;
    }
}

module.exports = {
    ZoneCounts
}