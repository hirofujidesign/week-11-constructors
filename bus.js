//requires
var Student = require("./student.js");
var prompt = require("prompt");

//creates bus where students can go on
var Bus = function (driverName, color, gas){
	this.studentsOnTheBus = [];
	this.driverName = driverName;
	this.color = color;
	this.gas = gas;
	this.studentEntersBus = function (na, ge, gr, gp, de, sl, ca){

		this.studentsOnTheBus.push(new Student(na, ge, gr, gp, de, sl, ca));
	};


	//bonus to delete student: NEED HELP WITH DELETE
	this.deleteStudentByName = function() {
		//ask for name
		console.log("Delete Student:");
		prompt.get(["name"], function (err,result) {

			for (i = 0;i < bus.Student.studentsOnTheBus.length;i++) {
				if (bus.Student.studentsOnTheBus[i].name == result) {

					//http://stackoverflow.com/questions/5767325/remove-a-particular-element-from-an-array-in-javascript
					
					var index = bus.Student.studentsOnTheBus[i]; 
					bus.Student.studentsOnTheBus.splice(index , 1);
					console.log(thisStudent.studentsOnTheBus);
				}
			} 

			console.log(studentsOnTheBus);

		});


	// var deleteStudentByName  = function (){
	// 	delete(Bus.Student.name = 'Lois'); prompt?
	// 	return deleteStudentByName;
	// };
// this.busChatter = function(){
// 		if (detentions<10 && GPA >= 2){
// 				console.log(Student.catchPhrase)
// 		}
// };

};


module.exports = Bus;