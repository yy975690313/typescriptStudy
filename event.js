// var EventEmitter = require('events').EventEmitter; 
// var event = new EventEmitter(); 
// event.on('some_event1', function() { 
//     console.log('some_event1 事件触发'); 
// }); 
// event.on('some_event2', function() { 
//     console.log('some_event2 事件触发'); 
// }); 
// setTimeout(function() { 
//     event.emit('some_event1'); 
// }, 2000); 
// setTimeout(function() { 
//     event.emit('some_event2'); 
// }, 4000); 


// var events = require('events'); 
// var emitter = new events.EventEmitter(); 
// emitter.on('someEvent', function(arg1, arg2) { 
//     console.log('listener1', arg1, arg2); 
// }); 
// emitter.on('someEvent', function(arg1,arg2) { 
//     console.log('listener2', arg1, arg2); 
// }); 
// emitter.emit('someEvent', 'arg1 参数', 'arg2 参数', 'arg3 参数'); 


var events = require('events');
var eventEmitter = new events.EventEmitter();

// 监听器 #1
var listener1 = function listener1() {
   console.log('监听器 listener1 执行。');
}

// 监听器 #2
var listener2 = function listener2() {
  console.log('监听器 listener2 执行。');
}

// 绑定 connection 事件，处理函数为 listener1 
eventEmitter.addListener('connection', listener1);

// 绑定 connection 事件，处理函数为 listener2
eventEmitter.on('connection', listener2);

var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " 个监听器监听连接事件。");

// 处理 connection 事件 
eventEmitter.emit('connection');

// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection', listener2);
console.log("listener2 不再受监听。");

// 触发连接事件
eventEmitter.emit('connection');

eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " 个监听器监听连接事件。");

console.log("程序执行完毕。");


var events = require('events'); 
var emitter = new events.EventEmitter(); 
emitter.emit('error'); 