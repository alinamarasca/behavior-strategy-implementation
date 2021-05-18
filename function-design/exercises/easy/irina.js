"use strict";

/**
 * builds an array counting down from `start` to 0
 * @param {number} [start=0] - the number to count down from
 *  start must be an integer that is greater than 0
 * @returns {number[]} an array of all numbers from `start` to 0
 */

//const stub = (start = 0) => {
//  return [];
//};

/*
1. Write if-else conditionals and return errors if the parameter does not match the description. 
2. Write a while loop or for-loop to count down while 'start' is greater than 0. 
3. Create a new variable with array (that supposed to be returned). All numbers that counted down push to this array.
*/

//for-loop
const timer1 = (start = 0) => {
  if (!Number.isInteger(start)) {
   return new Error("not an integer");
  }

  const result = [];
  for (let i = start; i >= 0; i--) {
    let count = i;
    result.push(count);
  }
  return result;
};



for (const solution of [
  secretSolution,
  //timer1, //it works
  //timer2,  //it works
  //timer3, //it works
]) {
  // the main test suite for the function
  describe(solution.name + ": counts down to 0", () => {
    it("default parameter", () => {
      expect(solution()).toEqual([0]);
    });
    it("if count down should be from 0", () => {
      expect(solution(0)).toEqual([0]);
    });
    it("if count down should be from 1", () => {
      expect(solution(1)).toEqual([1, 0]);
    });
    it("if count down should be from 4", () => {
      expect(solution(4)).toEqual([4, 3, 2, 1, 0]);
    });
    // it("should not accept Infinity", () => {
    //   expect(solution(Infinity)).toThrowError(new Error("start is not an integer"));
    // });
    // it("should not accept the parameter which is not a number", () => {
    //   expect(solution("strings")).toThrowError(new TypeError("start is not a number"));
    // });
    // it("should not accept the negative number", () => {
    //   expect(solution(-4)).toThrowError(new RangeError("start is less than 0"));
    // });
    it("should not work with decimals", () => {
      expect(solution(2.5)).toThrow(new Error("not an integer"));
    });
    
});

    // write at least 5 more tests ...
  };


// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = 0) { if ("number" != typeof a) throw new TypeError("start is not a number"); if (!Number.isInteger(a)) throw new Error("start is not an integer"); if (0 > a) throw new RangeError("start is less than 0"); const b = []; for (let c = a; 0 <= c; c--)b.push(c); return b }
