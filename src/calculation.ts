import { CalculatorState } from './types';

export function calculate(state: CalculatorState, expression: string): CalculatorState {
  return {
    value: parseInt(expression),
  };
}
