
class Tiers {
    constructor(json) {
        if (!json.demoman) {
            this.soldier = json[3];
            this.demoman = json[4];
        } else {
            this.soldier = json.soldier;
            this.demoman = json.demoman;
        }
    }
}

module.exports = {
    Tiers
}