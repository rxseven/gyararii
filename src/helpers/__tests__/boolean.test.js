import { isTruthy } from '../boolean';

describe('isTruthy helper', () => {
  it('should return truthy', () => {
    // Arrange
    const valueA = 1;
    const valueB = 1;

    // Act
    const result = isTruthy(valueA, valueB);

    // Assert
    expect(result).toBeTruthy();
  });
});
