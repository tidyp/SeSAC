const Person = require("./Person");
class Customer extends Person {
  constructor(name, age, gender, no, order) {
    super(name, age, gender);
    this.no = no;
    this.order = order;
  }
  placeOrder() {
    console.log(`${this.name} 고객님의 ${this.order} 주문을 완료하였습니다.`);
  }
}
module.exports = Customer;
