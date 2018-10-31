var player = require('./player');

class RunListing {
    constructor(json, c) {
        Object.assign(this, json.map((x) => new Run(x, c)));
    }
}

class Run {
    constructor(json, c) {
        this.duration = json.duration;
        this.player = new player.Player(json.name, json.id, json.steamid);
    }
}

module.exports = {
    RunListing,
    Run,
}