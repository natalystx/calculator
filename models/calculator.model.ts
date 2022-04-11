export interface OperatorMethods {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
  multiply: (a: number, b: number) => number;
  divide: (a: number, b: number) => number;
}

export class CalculatorModel implements OperatorMethods {
  plus(number1: number, number2: number) {
    return number1 + number2;
  }
  minus(number1: number, number2: number) {
    return number1 - number2;
  }
  multiply(number1: number, number2: number) {
    return number1 * number2;
  }
  divide(number1: number, number2: number) {
    return number1 / number2;
  }
}
