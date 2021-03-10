
// 输出全局变量 __filename 的值
console.log( __filename );


// 输出全局变量 __dirname 的值
console.log(__dirname );

// var t = setTimeout(()=>{console.log("setTimeout!")},1000);

// 清除定时器
// clearTimeout(t);

function printHello(){
    console.log( "Hello, World!");
 }
 // 两秒后执行以上函数
//  var inter = setInterval(printHello, 1000);
//  clearInterval(inter);

 class Cat{
     constructor(name,age){
         this.name = name
         this.age = age
         this.score =1023456
     }
 }

var c =new Cat("aa",100);
console.dir(c);


console.info("程序开始执行：");

var counter = 10;
console.log("计数: %d", counter);

console.time("获取数据");

var sum =0;
for (var i=0;i<=40000000;i++){
    sum+=i;
} 
console.error(`sum:${sum}`)
console.timeEnd('获取数据');

console.info("程序执行完毕。")


// 输出到终端
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

// 获取执行路径
console.log(process.execPath);


// 平台信息
console.log(process.platform);


// 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());