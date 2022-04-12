import Calculator, { Operator } from "./controllers/calculator.controller";
import CustomerRepository, { CustomerRepositoryV2 } from "./services/customer.repository";

try {
  const calculator = new Calculator(
    5,
    1,
    Operator.DIVIDE,
    new CustomerRepository({})
  );
  const result = calculator.getResult();
  (async () => {
    const result = await calculator.getCustomers()
    // const result = await calculator.
    console.log(result);
  })();

  console.log("#### Successful ####");
  console.log({ result });
} catch (err) {
  console.log("##### Failed #####");
  console.log({ err });
}