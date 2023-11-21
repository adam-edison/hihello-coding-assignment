import { CalculatorState, EvaluateOperator } from '../types';

export function expressionIsOnlyEvaluation({
  state,
  expression,
}: {
  state: CalculatorState;
  expression: string;
}) {
  return expression === EvaluateOperator && state.operand && state.operator;
}
