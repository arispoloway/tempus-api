var tempus = require('../tempus');

class Author {
    constructor(json) {
        this.map_id = json.map_id;
        this.name = json.name;
        this.id = json.id;
    }

    async toPlayerStats() {
        return await tempus.playerStats(this.id);
    }
}

module.exports = {
    Author,
}