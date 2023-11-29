const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, age, gender, jobtitle, salary, team) {
    super(name, age, gender, jobtitle, salary);
    this.team = team;
  }
  assignTasks() {
    console.log(
      `${this.name} ${this.jobtitle}이(가) ${this.team}에 업무를 배분하고 있습니다..`
    );
  }
}

module.exports = Manager;
