'use strict';

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */
const stub = (string = ('')) => {
  let toReverse = string.split("").reverse().join(""); //split to array, reverse array, join to string
  return toReverse;
};

/*
  -get string, copy to new value; returned result = copy if given string reversed
*/

for (const solution of [
  //secretSolution,
  stub
]) {
  // the main test suite for the function
  describe(solution.name + ': reverses a string', () => {
    it('default parameter is an empty string', () => {
      expect(solution()).toEqual('');
    });
    it('an empty string', () => {
      expect(solution('')).toEqual('');
    });
    it('all capital letters', () => {
      expect(solution('ASDF')).toEqual('FDSA');
    });
    //1
    it('one capital letter', () => {
      expect(solution('asDf')).toEqual('fDsa');
    });
    //2
    it('punctuation', () => {
      expect(solution('asdf!')).toEqual('!fdsa');
    });
    //3
    it('number', () => {
      expect(solution('ASDF13')).toEqual('31FDSA');
    });
    //4
    it('only numbers', () => {
      expect(solution('12345')).toEqual('54321');
    });
    //5
    it('one letter', () => {
      expect(solution('A')).toEqual('A');
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
