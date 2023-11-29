const Person = require("./Person");

class Student extends Person {
  constructor(name, age, gender, no, major) {
    super(name, age, gender)
    this.no = no
    this.major = major
  }
  study(){
    console.log(`${this.name} 학생이 ${this.major}을 공부하고 있습니다.`)
  }
}

module.exports = Student