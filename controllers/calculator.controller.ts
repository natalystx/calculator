import { CalculatorModel } from '../models/calculator.model';

export enum Operator {
  PLUS = '+',
  MINUS = '-',
  MULTIPLY = '*',
  DIVIDE = '/',
}

export interface GetResult {
  getResult: () => number;
}

export default class Calculator implements GetResult {
  private _number1: number;
  private _number2: number;
  private _operator: Operator;
  private _calculator = new CalculatorModel();

  constructor(number1: number, number2: number, operator: Operator) {
    this._number1 = number1;
    this._number2 = number2;
    this._operator = operator;
  }

  getResult() {
    switch (this._operator) {
      case Operator.PLUS:
        return this._calculator.plus(this._number1, this._number2);
      case Operator.MINUS:
        return this._calculator.minus(this._number1, this._number2);
      case Operator.MULTIPLY:
        return this._calculator.multiply(this._number1, this._number2);
      default:
        if (this._number2 === 0)
          throw new Error("A number can't divide by zero");

        return this._calculator.divide(this._number1, this._number2);
    }
  }
}
