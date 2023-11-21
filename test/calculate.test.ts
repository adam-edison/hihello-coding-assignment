import { calculate } from '../src/calculation';

describe('calculate function', () => {
  test('returns 0', () => {
    const result = calculate();
    expect(result).toEqual(0);
  });
});
