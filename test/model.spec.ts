import { OperatorMethods, CalculatorModel } from '../models/calculator.model';

describe('OperatorMethods is Working', () => {
  //act
  let model: OperatorMethods;
  // arrange
  model = new CalculatorModel();
  //assert
  test('to be defined', () => {
    expect(model).toBeDefined();
  });

  test('plus works', () => {
    expect(model.plus(2, 2)).toBe(4);
  });

  test('minus works', () => {
    expect(model.minus(2, 2)).toBe(0);
  });

  test('multiply works', () => {
    expect(model.multiply(2, 2)).toBe(4);
  });

  test('divide works', () => {
    expect(model.divide(5, 2)).toBe(2.5);
  });
});
