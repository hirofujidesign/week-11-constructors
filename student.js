var Student = function(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase, canStudentHaveFun) {
	this.name = name;
	this.gender = gender;
	this.grade = grade;
	this.GPA = GPA;
	this.detentions = detentions;
	this.sleepingInClass = sleepingInClass;
	this.catchPhrase = catchPhrase;
	this.canStudentHaveFun = function() {
		if (detentions<10 && GPA >= 2){
			console.log("Student can have Fun")
		}
	}

	}

var prompt = require('prompt');
prompt.start()

var info = function () {
	prompt.get['student'], function (err, result){
		this.student = function (){
			this.student.push(new student)
			canStudentHaveFun();
		}
	}
}


module.exports = Student;