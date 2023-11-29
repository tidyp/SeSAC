import GenericCal from "./GenericCal.js";

class EngineeringCalculator extends GenericCal {
  constructor(prev, curr) {
    super(prev, curr);
    this.prev = prev;
    this.curr = curr;
  }
  square(curr) {
    return curr ** 2
  }
}
export default EngineeringCalculator;
