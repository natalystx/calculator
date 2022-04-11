import Calculator, { Operator } from './controllers/calculator.controller';

try {
  const calculator = new Calculator(5, 0, Operator.DIVIDE);
  const result = calculator.getResult();

  console.log('#### Successful ####');
  console.log({ result });
} catch (err) {
  console.log('##### Failed #####');
  console.log({ err });
}
