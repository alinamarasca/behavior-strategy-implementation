'use strict';

/**
 * returns a description of how similar two values are
 *  if they are strictly equal -> 'strictly equal'
 *  if they have the same type -> 'same type'
 *  else -> 'totally different'
 * @param {any} val1
 * @param {any} val2
 * @returns {string} the values' solution
 */
const stub = (val1, val2) => {
  if (val1 === val2){
   return ('strictly equal');
  }
  if (typeof val1 == typeof val2){
    return ('same type')
  } else {
    return ('totally different')
  }
};

/*Implementation:
- get two values
- compare
- if val1 === val2 -> 'strictly equal'
  if typeof val == typeof val 2  -> 'same type'
 else -> 'totally different'
*/

for (const solution of [
  //secretSolution,
  stub,
]) {
  describe(solution.name + ': determines how similar two values are', () => {
   //check types of strictly equal
    describe('when values are strictly equal', () => {
      it('strings', () => {
        expect(solution('hello', 'hello')).toEqual('strictly equal');
      });
      it('numbers', () => {
        expect(solution(1, 1.0)).toEqual('strictly equal')
      });
      it('booleans', () => {
        expect(solution(true, true)).toEqual('strictly equal')
      });
    });
  // check if same type
    describe('when values have the same type', () => {
      it('strings', () => {
        expect(solution('hello', 'hola')).toEqual('same type');
      });
      it('numbers', () => {
        expect(solution(2, 3)).toEqual('same type');
      });
      it('booleans', () => {
        expect(solution(true, false)).toEqual('same type');
      });
    });
    // check when different
    describe('when values are nothing alike', () => {
      it('obvious comparisons', () => {
        expect(solution(null, 4)).toEqual('totally different');//._._(_);
      });
      it('deceptive comparisons', () => {
        expect(solution(4, '4')).toEqual('totally different');
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a, b) { let c = ""; return c = a === b ? "strictly equal" : typeof a == typeof b ? "same type" : "totally different", c }
