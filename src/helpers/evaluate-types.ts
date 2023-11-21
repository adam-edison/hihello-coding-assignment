import { OPERATORS, Operator } from '../types';

export function isNumber(a: string) {
  return !isNaN(+a);
}

export function isOperator(a: string): a is Operator {
  return OPERATORS.includes(a as Operator);
}
