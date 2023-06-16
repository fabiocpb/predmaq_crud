//Slice model string
// let modelid = modelstring.slice(0,1);

var fs = require('fs');
var parse = require('csv-parse');
var parser = parse.parse({columns: true, delimiter: ","}, function (err, records) {
    console.log(records);
});

fs.createReadStream(__dirname+ "/predictive_maintenance.csv").pipe(parser);

