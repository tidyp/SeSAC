class GenericCal {
  constructor(prev, curr) {
    this.prev = prev;
    this.curr = curr;
  }

  add(prev, curr) {
    return prev + curr;
  }

  sub(prev, curr) {
    return prev - curr;
  }

  mul(prev, curr) {
    return prev * curr;
  }

  div(prev, curr) {
    return prev / curr;
  }
}

// module.exports  = GenericCal;
export default GenericCal;
