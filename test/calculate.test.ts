import { calculate } from '../src/calculator';

describe('calculate function', () => {
  describe('when server is running', () => {
    test('returns 0', () => {
      const result = calculate();
      expect(result).toEqual(0);
    });
  });
});
