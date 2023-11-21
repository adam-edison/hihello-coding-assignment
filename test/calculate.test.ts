import { calculate } from '../src/calculation';
import { CalculatorState } from '../src/types';

interface TestCase {
  name: string;
  state: CalculatorState;
  expression: string;
  expected: CalculatorState;
}

const testCases: TestCase[] = [
  {
    name: 'clean value single digit will overwrite stored value',
    state: { value: 0 },
    expression: '3',
    expected: { value: 3 },
  },
  {
    name: 'clean value multiple digits will overwrite stored value',
    state: { value: 0 },
    expression: '23456',
    expected: { value: 23456 },
  },
  {
    name: 'clean value multiple digits will overwrite stored value',
    state: { value: 0 },
    expression: '23456',
    expected: { value: 23456 },
  },
  {
    name: 'single digit addition',
    state: { value: 0 },
    expression: '2+3=',
    expected: { value: 5, operator: '+', operand: 3 },
  },
];

describe('calculate function', () => {
  for (const testCase of testCases) {
    test(`${testCase.name}`, () => {
      const result: CalculatorState = calculate(testCase.state, testCase.expression);
      expect(result).toStrictEqual(testCase.expected);
    });
  }
});
