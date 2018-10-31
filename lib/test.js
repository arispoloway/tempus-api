
var t = require('./tempus');


(async () => {
    var x = await t.detailedMapList();
    var y = await x[0].toMapOverview();
    var z = await y.demoman_runs[7].player.toPlayerStats()
    console.log(z);
})();

