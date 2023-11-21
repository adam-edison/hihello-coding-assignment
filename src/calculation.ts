import { CalculatorState } from './types';

export function calculate(state: CalculatorState, expression: string): CalculatorState {
  state.value = parseInt(expression);

  return state;
}
