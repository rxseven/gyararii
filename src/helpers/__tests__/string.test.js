import { pluralWord } from '../string';

describe('pluralWord helper', () => {
  it('should return singular word', () => {
    // Arrange
    const count = 1;
    const singular = 'image';

    // Act
    const result = pluralWord(count, singular);

    // Assert
    expect(result).toBe(singular);
  });

  it('should return plural word by suffixing an "s"', () => {
    // Arrange
    const count = 2;
    const singular = 'image';

    // Act
    const result = pluralWord(count, singular);

    // Assert
    expect(result).toBe(`${singular}s`);
  });

  it('should return plural word by providing a particular word', () => {
    // Arrange
    const count = 2;
    const singular = 'is';
    const plural = 'are';

    // Act
    const result = pluralWord(count, singular, plural);

    // Assert
    expect(result).toBe(plural);
  });
});
