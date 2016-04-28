var prompt = require('prompt');

var Bus = require('./bus.js');

prompt.start();

var busOne = new Bus("someDude", "yellow", "full");

console.log(busOne); //bus before people enter

busOne.studentEntersBus("DUDE","M","B",5,14,true,"I'M SO COOL");
busOne.studentEntersBus("CHICK","F","A",2,4,true,"I'm cooler...");
busOne.studentEntersBus("Bob","M","C",1,1,true,"I'M SO COOL");
busOne.studentEntersBus("Faye","F","A",3,3,true,"I'm cooler...");
busOne.studentEntersBus("Spike","M","B",5,9,true,"I'M SO COOL");
busOne.studentEntersBus("Julia","F","A",2,8,true,"I'm cooler...");
busOne.studentEntersBus("Ed","M","B",1,11,true,"I'M SO COOL");
busOne.studentEntersBus("Melissa","F","F",1,40,true,"I'm cooler...");
busOne.studentEntersBus("Ivan","M","A",5,14,true,"I'M SO COOL");
busOne.studentEntersBus("Patrica","F","A",4,1,true,"I'm cooler...");
busOne.studentEntersBus("Jason","M","A",5,0,true,"I'M SO COOL");
busOne.studentEntersBus("Jessica","F","A",4,4,true,"I'm cooler...");
busOne.studentEntersBus("Neo","M","A",5,5,true,"I'M SO COOL");
busOne.studentEntersBus("Trinity","F","D",2,4,true,"I'm cooler...");
busOne.studentEntersBus("Morpheus","M","C",3,8,true,"I'M SO COOL");
busOne.studentEntersBus("Amy","F","C",2,4,true,"I'm cooler...");
busOne.studentEntersBus("Jay","M","C",4,1,true,"I'M SO COOL");
busOne.studentEntersBus("Katrina","F","A",2,4,true,"I'm cooler...");
busOne.studentEntersBus("Peter","M","C",3,9,true,"I'M SO COOL");
busOne.studentEntersBus("Lois","F","A",2,4,true,"I'm cooler...");


console.log(busOne); //bus with people entered