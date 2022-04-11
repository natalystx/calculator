import { OperatorMethods, CalculatorModel } from '../models/calculator.model';
import { mock } from 'jest-mock-extended';

// jest.mock('../models/calculator.model', () => {
//   const mockCallback = jest.fn();
//   return {
//     OperatorMethods: jest.fn().mockImplementation(() => {
//       return {
//         plus: jest.fn().mockImplementation(() => {
//           return mockCallback;
//         }),
//         minus: jest.fn().mockImplementation(() => {
//           return mockCallback;
//         }),
//         divide: jest.fn().mockImplementation(() => {
//           return mockCallback;
//         }),
//         multiply: jest.fn().mockImplementation(() => {
//           return mockCallback;
//         }),
//       };
//     }),
//   };
// });

describe('OperatorMethods is Working', () => {
  let model: OperatorMethods;

  function mockCommentCallback(a: number) {
    (model.plus as jest.Mock).mockImplementation(() => {
      return a;
    });
  }

  beforeAll(() => {
    model = mock<CalculatorModel>();
  });
  test('Is it works?', () => {
    // mockCommentCallback(3);
    expect(model).toBeDefined();
    expect(model.plus(2, 1)).toBe(3);
  });
});
