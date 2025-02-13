'use strict';

describe('strict equality compares the type and the value', () => {
  describe('strings', () => {
    it(`' and " are the same`, () => {
      const actual = 'hello' === 'hello';
      const expected = true;//
      expect(actual).toEqual(expected);
    });
    it('capital and lower case are not the same', () => {
      const actual = 'HI' === 'hi';
      const expected = false;
      expect(actual).toEqual(expected);
    });
  });
  describe('numbers', () => {
    it('extra zeros after the . do not matter', () => {
      const actual = 1 === 1.0;
      const expected = true;
      expect(actual).toEqual(expected);
    });
    it('scientific notation exists in JavaScript', () => {
      const actual = 1000 === 1e3;
      const expected = true;
      expect(actual).toEqual(expected);
    });
  });
  describe('strings and numbers', () => {
    it('some comparisons are obviously false', () => {
      const actual = 12 === 'turtle';
      const expected = false;
      expect(actual).toEqual(expected);
    });
    it('but others are more confusing', () => {
      const actual = 12 === '12';
      const expected = false;
      expect(actual).toEqual(expected);
    });
  });
});

