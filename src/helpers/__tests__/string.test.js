import { pluralWord } from '../string';

describe('pluralWord helper', () => {
  it('should return singular word', () => {
    const count = 1;
    const singular = 'image';
    const expected = singular;

    const result = pluralWord(count, singular);

    expect(result).toBe(expected);
  });

  it('should return plural word by suffixing an "s"', () => {
    const count = 2;
    const singular = 'image';
    const expected = `${singular}s`;

    const result = pluralWord(count, singular);

    expect(result).toBe(expected);
  });

  it('should return plural word by providing a particular word', () => {
    const count = 2;
    const singular = 'is';
    const plural = 'are';
    const expected = plural;

    const result = pluralWord(count, singular, plural);

    expect(result).toBe(expected);
  });
});
