var Student = require("./student.js");

var Bus = function (driverName, color, gas){

this.studentsOnTheBus = [];
this.driverName = driverName;
this.color = color;
this.gas = gas;

this.studentEntersBus = function (na, ge, gr, GP, de, sl, ca){
	this.studentsOnTheBus.push(new Student(na, ge, gr, GP, de, sl, ca));
};
// this.busChatter = function(){
// 		if (detentions<10 && GPA >= 2){
// 				console.log(Student.catchPhrase)
// 		}
// };

}


module.exports = Bus;