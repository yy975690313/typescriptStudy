var fs = require("fs");

// 异步读取
fs.readFile('input.txt', function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log("异步读取: \n" + data.toString());
});

// var data2 = await fs.readFile('input.txt', function (err, data) {
//     if (err) {
//         return console.error(err);
//     }
//     return data;
//  });

//  console.log("异步读取2: \n" + data2);

// 同步读取
var data = fs.readFileSync('input.txt');
console.log("同步读取: \n" + data.toString());

console.log("程序执行完毕。");


var os = require("os");

// CPU 的字节序
console.log('endianness : ' + os.endianness());

// 操作系统名
console.log('type : ' + os.type());

// 操作系统名
console.log('platform : ' + os.platform());

// 系统内存总量
console.log('total memory : ' + os.totalmem() + " bytes.");

// 操作系统空闲内存量
console.log('free memory : ' + os.freemem() + " bytes.");



var path = require("path");

// 格式化路径
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// 连接路径
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', '..'));

// 转换为绝对路径
console.log('resolve : ' + path.resolve('fs.js'));

// 路径中文件的后缀名
console.log('ext name : ' + path.extname('fs.js'));


var dns = require('dns');

dns.lookup('www.baidu.com', function onLookup(err, address, family) {
   console.log('ip 地址:', address);
   dns.reverse(address, function (err, hostnames) {
   if (err) {
      console.log(err.stack);
   }

   console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames));
});  
});