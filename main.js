var prompt = require('prompt');

var Bus = require('./bus.js');

prompt.start();

var busOne = new Bus("someDude", "yellow", "full");

console.log(busOne); //bus before people enter

busOne.studentEntersBus("DUDE","M","B",5,14,true,"I'M SO COOL");
busOne.studentEntersBus("CHICK","F","A",2,4,true,"I'm cooler...");

console.log(busOne); //bus with people entered