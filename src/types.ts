export interface CalculatorState {
  value: number; // stored value, currently displayed
  operand?: number; // last supplied value to operate on
  operator?: Operator; // last supplied operator

  // e.g.
  // 0
  // > 3+7-4=
  // 3

  // value: 3
  // operand: 4
  // operator: -
}

export const OPERATORS = ['+', '-', '*', '/'] as const;
export type OperatorTuple = typeof OPERATORS;
export type Operator = OperatorTuple[number];

export type EvaluateOperator = '=';
