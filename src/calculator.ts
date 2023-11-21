import { question } from 'readline-sync';
import { calculate } from './calculation';
import { output } from './output';

let state = { value: 0 };
let expression = '';

const exitExpressions = ['exit', 'q'];

function shouldExit(expression: string) {
  return exitExpressions.includes(expression);
}

do {
  output(`${state.value}`);

  const input = question('> ', {
    limit: /^([0-9+=]+)|exit$/,
    limitMessage: 'Invalid numeric expression',
  });
  expression = input.trim();

  state = calculate(state, expression);
} while (!shouldExit(expression));
