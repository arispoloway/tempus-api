
var t = require('./tempus');


(async () => {
    var x = await t.detailedMapList();
    var y = await x[0].toMapOverview();
    var z = await y.demoman_runs[7].player.toPlayerStats()
    var a = await y.getRecords('map', 0);
    var s = await t.serverList();
    var s2 = await t.serverDemos(10);
    var s3 = await t.getRanks('o', 2);
    console.log(a);
    console.log(z);
    console.log(s);
    console.log(s2);
    console.log(s3);
})();

