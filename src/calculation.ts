import { expressionIsOnlyEvaluation } from './helpers/evaluate-state';
import { isNumber, isOperator } from './helpers/evaluate-types';
import { CalculatorState, Operator } from './types';

export function calculate(state: CalculatorState, expression: string): CalculatorState {
  if (expressionIsOnlyEvaluation({ state, expression })) {
    return performEvaluationOnly({ state, expression });
  }

  const { left, right, operator } = breakDownExpression(expression);

  if (!operator) {
    return {
      value: parseFloat(left),
    };
  }

  const value = performCalculation({ left, right, operator });

  return {
    value,
    operand: parseFloat(right),
    operator,
  };
}

function breakDownExpression(expression: string) {
  let left = '';
  let right = '';
  let operator: Operator | undefined = undefined;

  for (let i = 0; i < expression.length; i++) {
    const part = expression[i];

    if (isNumber(part) && !operator) {
      left += part;
    } else if (isNumber(part) && operator) {
      right += part;
    } else if (isOperator(part)) {
      operator = part;
    }
  }

  return { left, right, operator };
}

function performCalculation({
  left,
  right,
  operator,
}: {
  left: string;
  right: string;
  operator: Operator;
}): number {
  if (operator === '+') {
    return parseFloat(left) + parseFloat(right);
  }

  if (operator === '-') {
    return parseFloat(left) - parseFloat(right);
  }

  if (operator === '*') {
    return parseFloat(left) * parseFloat(right);
  }

  if (operator === '/') {
    return parseFloat(left) / parseFloat(right);
  }

  return 0;
}

function performEvaluationOnly({
  state,
}: {
  state: CalculatorState;
  expression: string;
}): CalculatorState {
  const left = `${state.value}`;
  const right = `${state.operand}`;
  const { operator } = state;

  if (!operator) {
    throw new Error('unexpected state: operator is not defined');
  }

  const value = performCalculation({ left, right, operator });

  return {
    value,
    operand: parseFloat(right),
    operator,
  };
}
