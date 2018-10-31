
class ZoneCounts {
    constructor(json) {
        if (json.checkpoint)
            this.checkpoint = json.checkpoint.count || json.checkpoint;
        if (json.map)
            this.map = json.map.count || json.map;
        if (json.linear)
            this.linear = json.linear.count || json.linear;
        if (json.map_end)
            this.map_end = json.map_end.count || json.map_end;
        if (json.special)
            this.special = json.special.count || json.special;
        if (json.trick)
            this.trick = json.trick.count || json.trick;
        if (json.misc)
            this.misc = json.misc.count || json.misc;
        if (json.course)
            this.course = json.course.count || json.course;
        if (json.bonus_end)
            this.bonus_end = json.bonus_end.count || json.bonus_end;
    }
}

class ZoneInfo {
    constructor(json){
        Object.assign(this, json);
    }
}

module.exports = {
    ZoneCounts,
    ZoneInfo,
}