var fs = require('fs');

var stream = fs.createReadStream("data.txt");
var file = fs.createWriteStream('output.txt');

stream.on("data", function(data){
    console.log(data);
    console.log(data.toString());
    file.write(data);
    file.end();
})