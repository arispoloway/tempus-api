
class Stat {
    constructor(json) {
        this.count = json.count;
        this.points = json.points;
    }
}

class Stats {
    constructor(json) {
        if (json.bonus)
            this.bonus = new Stat(json.bonus);
        if (json.course)
            this.course = new Stat(json.course);
        if (json.trick)
            this.trick = new Stat(json.trick);
        if (json.map)
            this.map = new Stat(json.map);
    }
}

module.exports = {
    Stats
}