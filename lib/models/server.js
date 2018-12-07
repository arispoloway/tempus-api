var tempus = require('../tempus');
var map = require('./map');
var player = require('./player');

class Server {
    constructor(id) {
        this.id = id;
    }

    async toServerOverview() {
        return await tempus.serverOverview(this.id);
    }

    async getServerDemos() {
        return await tempus.serverDemos(this.id);
    }
}

class GameInfo {
    constructor(json) {
        Object.assign(this, json);
        this.map = new map.Map(json.currentMap);
        if (json.nextMap){
            this.nextMap = new map.Map(json.nextMap)
        }
        this.players = json.users.map((x) => new player.Player(x.name, x.id, x.steamid));
    }
}

class ServerInfo extends Server {
    constructor(json) {
        super(json.id);
        Object.assign(this, json);
    }
}

class ServerOverview extends ServerInfo {
    constructor(json){
        super(json.server_info);
        if (json.game_info)
            this.game_info = new GameInfo(json.game_info);
    }
}

module.exports = {
    Server,
    ServerInfo,
    ServerOverview,
}