class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  greet() {
    console.log(`안녕, 나는 ${this.name}이고, ${this.age}살이야. `);
  }

  walk() {
    console.log(`${this.name}이(가) 걷고 있어요.`);
  }
  eat() {
    console.log(`${this.name}이(가) 식사 중입니다.`);
  }
}

module.exports = Person;
