'use strict';

/**
 * converts two boolean values into a binary string
 *  true become "1", false becomes "0"
 * @param {boolean} [a=false] - the left value
 * @param {boolean} [b=false] - the right value
 * @returns {string}
 * @example
 *  // true, false --> '10'
 *  // false, false --> '00'
 *  // false, true --> '01'
 */

const stub1 = (a, b) => {
if (a === true){
  a = 1;
} else {
  a = 0;
}
if (b === true){
  b = 1;
  } else {
    b = 0;
  }
  let it = String(a) + String(b);
  return it;
};

const stub = (a, b) => {
let it = String(Number(a)) + String(Number(b));
  return it;
};
/*
Implementation:
-get two params
- if param == true -> 1 <--compare
- if param == false -> 0 <-- compare
- returns string; string =+ string
STRATEGY2:
-get two params
-convert to Number
-concatenate <-- convert to String
*/

for (const solution of [
  //secretSolution,
   stub,
]) {
  // this function only 4 possible combinations of arguments
  //  it's possible test them all and have 100% confidence in the function
  describe(solution.name + ': converts two booleans to binary', () => {
    it('true, true --> "11"', () => {
      const actual = solution(true, true);
      expect(actual).toEqual('11');
    });
    it('true, false --> "10"', () => {
      const actual = solution(true, false);
      expect(actual).toEqual('10');
    });
    it('false, true --> "01"', () => {
      const actual = solution(false, true);
      expect(actual).toEqual('01');
    });
    it('false, false -->"00"', () => {
      expect(solution(false, false)).toEqual("00");
    });
  });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(c = false, a = false) { if ("boolean" != typeof c) { throw new TypeError("a is not boolean"); } if ("boolean" != typeof a) { throw new TypeError("b is not boolean"); } let b = ""; return b += c ? "1" : "0", b += a ? "1" : "0", b }
