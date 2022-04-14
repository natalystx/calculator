import CalculatorModel, { OperatorMethods } from "../models/calculator.model";
import { MockProxy, mock, mockClear } from "jest-mock-extended";

describe("OperatorMethods is Working", () => {
  let model: MockProxy<OperatorMethods>;

  beforeAll(() => {
    model = mock<CalculatorModel>();
    mockClear(model);
  });

  test("Is it works?", () => {
    model.plus.mockReturnValue(8);
    expect(model.plus(2, 1)).toBe(8);
  });
});