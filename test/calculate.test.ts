import { calculate } from '../src/calculation';
import { CalculatorState } from '../src/types';

describe('calculate function', () => {
  test('clean value will overwrite stored value', () => {
    const state: CalculatorState = {
      value: 0,
    };
    const expression = '3';
    const result: CalculatorState = calculate(state, expression);
    expect(result.value).toEqual(3);
  });
});
