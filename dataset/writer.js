var fs = require('fs');
var stringify = require("csv-stringify");

var datateste = [
    {
        "UDI": "87",
        "Product ID": "H29500"
    }
];

stringify.stringify(datateste, {
    header:true
}, function (err, output) {
    fs.writeFile(__dirname + "/datateste.csv", output, function(err, result){
        if(err) console.log('error', err);
    });
});

