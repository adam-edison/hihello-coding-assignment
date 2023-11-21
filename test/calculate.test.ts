import { calculate } from '../src/calculation';
import { CalculatorState } from '../src/types';

const testCases = [
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
];

describe('calculate function', () => {
  for (const testCase of testCases) {
    test(`${testCase.name}`, () => {
      const result: CalculatorState = calculate(testCase.state, testCase.expression);
      expect(result).toStrictEqual(testCase.expected);
    });
  }
});
