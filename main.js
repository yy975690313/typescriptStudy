var fs = require("fs");
// var data = fs.readFileSync('1.js');
// console.log(data.toString());
fs.readFile('1.js', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!");