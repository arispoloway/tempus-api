

class RankInfo {
    constructor(json) {
        Object.assign(this, json);
    }
}

class ClassRankInfo {
    constructor(json){ 
        this.soldier = new RankInfo(json[3]);
        this.demoman = new RankInfo(json[4]);
    }
}

module.exports = {
    RankInfo,
    ClassRankInfo,
}