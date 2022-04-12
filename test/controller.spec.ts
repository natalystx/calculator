import { CustomerData, CustomerRepositoryAble,  } from "./../services/customer.repository";
import { MockProxy, mock, mockClear } from "jest-mock-extended";
import Calculator, { Operator } from "../controllers/calculator.controller";

describe("controller", () => {
  let controller: Calculator;
  let mockRepo: MockProxy<CustomerRepositoryAble>;

  const mockResponse: CustomerData = {
    id: 0,
    customer_code: "20scoops",
    customer_name: "CNX",
    email: "cnx@20scoops.net",
  };

  beforeAll(() => {
    mockRepo = mock<CustomerRepositoryAble>();
    controller = new Calculator(1, 2, Operator.DIVIDE, mockRepo);
    mockClear(mockRepo);
  });

  test("call customer repository?", async () => {
    mockRepo.getCustomers.mockResolvedValue([mockResponse]);
    const result = await controller.getCustomers();
    expect(result[0].id).toStrictEqual(mockResponse.id);
  });
});
