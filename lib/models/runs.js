

class RunListing {
    constructor(json, c) {
        this.runs = json.map((x) => new Run(x, c))
        this.c = c;
    }
}

class Run {
    constructor(json, c) {
        this.duration = json.duration;
        this.steamid = json.steamid;
        this.id = json.id;
        this.name = json.name;
    }
}

module.exports = {
    RunListing,
    Run,
}