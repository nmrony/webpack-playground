
var ADDnSUB = (function ADDnSUB() {
  function add (a, b) {
    return a+b;
  }

  function substract(a, b) {
    return a-b;
  }

  return {
    add: add,
    substract: substract
  }
})();

module.exports = ADDnSUB;
