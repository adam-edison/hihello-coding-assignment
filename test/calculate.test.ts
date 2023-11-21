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
  {
    name: 'single digit subtraction',
    state: { value: 0 },
    expression: '2-3=',
    expected: { value: -1, operator: '-', operand: 3 },
  },
  {
    name: 'single digit multiplication',
    state: { value: 0 },
    expression: '2*4=',
    expected: { value: 8, operator: '*', operand: 4 },
  },
  {
    name: 'single digit division',
    state: { value: 0 },
    expression: '2/4=',
    expected: { value: 0.5, operator: '/', operand: 4 },
  },
  {
    name: 'expression is just =',
    state: { value: 5, operand: 3, operator: '-' },
    expression: '=',
    expected: { value: 2, operator: '-', operand: 3 },
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
