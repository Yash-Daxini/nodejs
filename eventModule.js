const events = require("events");

let ev = new events.EventEmitter();

ev.on("my_event",(message)=>{
    console.log('Message', message);
});

let eventFunc = (status,data)=>console.log( status + " " + data);

ev.once("oneTimeEvent",eventFunc);

// ev.emit('my_event',"my event fired");

ev.off("oneTimeEvent",eventFunc);

ev.emit('oneTimeEvent',200,"OK");