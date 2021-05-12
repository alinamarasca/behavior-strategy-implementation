'use strict';

/**
 * repeats a string a specific number of times
 * @param {string} [text=''] - the string to repeat. defaults to empty string
 * @param {number} [repetitions=1] - how many times to repeat. defaults to 1
 *  repetitions must be greater than zero, and must be an integer
 * @return {string} the text repeated as many times as repetitions
 */
const stub = () => {};

/*
  your strategy goes here
*/

for (const solution of [
  secretSolution,
  // stub,
]) {
  // the main test suite for the function
  describe(solution.name + ': repeating a string:', () => {
    describe('default parameters', () => { //we will check default

      it('repeat once if no repetitions is passed', () => { //by default you get 1 repetition CASE 1: string, no reps
        expect(solution('asdf')).toEqual('asdf');
      });

      it('expect an empty string if no arguments are passed', () => { //no arg -> empty string repeats 1 time = empty string CASE2: no string, no reps
        expect(solution()).toEqual('');
      });
    });
//----------------------------------
    describe('an empty string', () => {  // repetitions greater than zero,  empty string
      it('0 times', () => {
        expect(solution('', 0)).toEqual('');
      });

      it('10 times', () => {
        expect(solution('', 10)).toEqual('');
      });

      it('100 times', () => {
        expect(solution('', 100)).toEqual('');
      });

    });
//-------------------------------------
    describe('zero repetitions', () => { // repetitions greater than zero, not empty string
      it('"asdf"', () => {
        expect(solution('asdf', 0)).toEqual('');
      });

      it('"tommywalk"', () => {
        expect(solution('tommywalk', 0)).toEqual('');
      });
    });
//------------------------------------
    describe('standard use cases', () => { //normal situation - have both string and reps
      it('repeat a phrase 3 times', () => {
        expect(solution('go to school', 3)).toEqual(
          'go to schoolgo to schoolgo to school'
        );
      });
//----------------------------------------------
      it('phrases with punctuation', () => { // standard  MORE COMPLEX
        expect(solution('"Go!", said Dr. Seuss?', 2)).toEqual(
          '"Go!", said Dr. Seuss?"Go!", said Dr. Seuss?'
        );
      });
//--------------------------------------------
      it('special characters', () => { // EDGE CASE? 
        expect(solution('\\ \n \t s', 2)).toEqual('\\ \n \t s\\ \n \t s');
      });

    });

  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = 1) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("number" != typeof b) { throw new TypeError("repetitions is not a number"); } if (0 > b) { throw new RangeError("repetitions is less than zero"); } if (!Number.isInteger(b)) { throw new RangeError("repetitions is not an integer"); } return Array(b).fill(a).join(""); }












