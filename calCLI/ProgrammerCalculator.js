import GenericCal from "./GenericCal.js";

class ProgrammerCalculator extends GenericCal {
  constructor(prev, curr) {
    super(prev, curr);
    this.prev = prev;
    this.curr = curr;
  }
}
export default ProgrammerCalculator;
