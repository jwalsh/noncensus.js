var fs = require('fs');
var parse = require('csv-parse');

let zipIdx;

var parser = parse({
  auto_parse: true,
  columns: data => {
    zipIdx = data.indexOf('zip');
    console.log('columns', zipIdx, data);
  }
}, function(err, data){
  // console.log(data);
  let zips = data.map(e => e[zipIdx]);
  console.log(zips);
});

fs.createReadStream(__dirname+'/zip_codes.csv').pipe(parser);
