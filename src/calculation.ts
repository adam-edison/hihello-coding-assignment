import { CalculatorState, EvaluateOperator, OPERATORS, Operator } from './types';

export function calculate(state: CalculatorState, expression: string): CalculatorState {
  // if only given =, perform the last operation again

  if (expression === EvaluateOperator && state.operand && state.operator) {
    const left = `${state.value}`;
    const right = `${state.operand}`;
    const { operator } = state;

    const value = performCalculation({ left, right, operator });

    return {
      value,
      operand: parseFloat(right),
      operator,
    };
  }
  let left = '';
  let right = '';
  let operator: Operator | undefined = undefined;

  // build up expression parts
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

function isNumber(a: string) {
  return !isNaN(+a);
}

function isOperator(a: string): a is Operator {
  return OPERATORS.includes(a as Operator);
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
