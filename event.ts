var EventEmitter = require('events').EventEmitter; 
var event:Event = new EventEmitter(); 
event.on('some_event1', function() { 
    console.log('some_event1 事件触发'); 
}); 
event.on('some_event2', function() { 
    console.log('some_event2 事件触发'); 
}); 
setTimeout(function() { 
    event.emit('some_event1'); 
}, 2000); 
setTimeout(function() { 
    event.emit('some_event2'); 
}, 4000); 