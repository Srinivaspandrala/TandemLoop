class Calculator {
    constructor(a, b, operation) {
      this.a = a;
      this.b = b;
      this.operation = operation;
    }
  
    calculate() {
      switch (this.operation.toLowerCase()) {
        case 'add':
          return this.a + this.b;
        case 'subtract':
          return this.a - this.b;
        case 'multiply':
          return this.a * this.b;
        case 'divide':
          return this.b !== 0 ? this.a / this.b : 'Error: Division by zero';
        default:
          return 'Invalid operation';
      }
    }
  }
  
  const calc_add = new Calculator(10, 2, 'add');
  const calc_subtract = new Calculator(10,2,"subtract")
  const calc_multiply = new Calculator(10,2,"multiply")
  const calc_divide = new Calculator(10,2,"divide")
  
  console.log('Addition:', calc_add.calculate());
  console.log('Subtraction:', calc_subtract.calculate());
  console.log('Multiplication:', calc_multiply.calculate());
  console.log('Division:', calc_divide.calculate());
  