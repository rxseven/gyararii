import { isTruthy } from '../boolean';

describe('isTruthy helper', () => {
  it('should return truthy', () => {
    const valueA = 1;
    const valueB = 1;

    const result = isTruthy(valueA, valueB);

    expect(result).toBeTruthy();
  });
});
