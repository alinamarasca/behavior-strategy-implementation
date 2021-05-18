"use strict";

/**
 * builds an array counting up from 0 to `max`
 * @param {number} [max=0] - the number to count up to
 *  max must be an integer that is greater than 0
 * @returns {number[]} an array of all numbers from 0 to `max`
 */
 const stub = (max = 0) => {
   let array = [];

   if (typeof max !== 'number'){
     return ("max is not a number");
   }
   if (!Number.isInteger(max)){
     return ('must be integer');
   }
  if (max < 0){
    return ('must be larger than 0');
  }
  for (let i = 0; i <= max; i++) {
  array.push(i);
   }
   return array;
};

/*

  your strategy goes here
*/

for (const solution of [
  //secretSolution,
   stub
]) {
  // the main test suite for the function
  describe(solution.name + ": counts up from 0", () => {
    it("default parameter", () => {
      const actual = solution();
      expect(actual).toEqual([0]);
    });
    it('0', () => {
      expect(solution(0)).toEqual([0]);
    });

    it('1', () => {
      expect(solution(1)).toEqual([0, 1]);
    });
    //1
    it('4', () => {
      expect(solution(4)).toEqual([0, 1, 2, 3, 4]);
    });
    //2
    it('NaN', () => {
      expect(solution('r')).toEqual("max is not a number");
    });
    //3
    it('start is integer', () => {
      expect(solution(2.3)).toEqual('must be integer');
    });
    //4
    it('start is negative', () => {
      expect(solution(-3)).toEqual('must be larger than 0');
    });
    //5
    it('more than 1 "start"', () => {
      expect(solution(2, 4)).toEqual('must be one number')
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = 0) { if ("number" != typeof a) throw new TypeError("max is not a number"); if (!Number.isInteger(a)) throw new Error("max is not an integer"); if (0 > a) throw new RangeError("max is less than 0"); const b = []; for (let c = 0; c <= a; c++)b.push(c); return b }
