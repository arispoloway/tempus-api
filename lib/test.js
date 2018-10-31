
var t = require('./tempus');


(async () => {
    var x = await t.detailedMapList();
    var y = await x[0].toMapOverview();
    console.log(y);
})();

