'use strict';

/**
 * builds an array counting down from `start` to 0
 * @param {number} [start=0] - the number to count down from
 *  start must be an integer that is greater than 0
 * @returns {number[]} an array of all numbers from `start` to 0
 */
 const stub = (start = 0) => {
  let array = [];
  if (typeof start !== 'number'){
    return ('is NaN');
  }
  if (!Number.isInteger(start)){
    return ('must be integer');
  }
 if (start < 0){
   return ('must be larger than 0');
 }
 for (let i = start; i >= 0; i--) {
 array.push(i);
  }
  return array;
};

/*
  -take `start`
  -get numbers from it to 0 - HOW?
  1 - get number -> -1 & push, loop till pushed is > 0
  2 - get number -> count from 0 , loop till number and inverse
    -push each number to array
  -start > 0, only integer
  
function mine(start = 0) {
  let array = [];
  for(let i = start; i >= -1 ; i--){
  console.log(array);
  array.push(i);
  }
  return array;
  
};
mine(3);

function mine1(start = 0) {
  let array = [];
  for(let i = 0; i <= start ; i++){
  //console.log(array);
  array.push(i);
}
  array.reverse();
  console.log(array);
  return array;
  
};
mine1(3);
*/

for (const solution of [
  secretSolution,
  // stub
]) {
  // the main test suite for the function
  describe(solution.name + ': counts down to 0', () => {
    it('default parameter', () => {
      expect(solution()).toEqual([0]);
    });

    it('0', () => {
      expect(solution(0)).toEqual([0]);
    });

    it('1', () => {
      expect(solution(1)).toEqual([1, 0]);
    });
    //1
    it('4', () => {
      expect(solution(4)).toEqual([4, 3, 2, 1, 0]);
    });
    //2
    it('NaN', () => {
      expect(solution('r')).toEqual('is NaN');
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
function secretSolution(a = 0) { if ("number" != typeof a) throw new TypeError("start is not a number"); if (!Number.isInteger(a)) throw new Error("start is not an integer"); if (0 > a) throw new RangeError("start is less than 0"); const b = []; for (let c = a; 0 <= c; c--)b.push(c); return b }
