'use strict';

/**
 *  checks if a number is divisible by 5, 3 or both:
 *    numbers divisible by 3 and 5 return "fizzbuzz"
 *    numbers divisible by only 3 return "fizz"
 *    numbers divisible by only 5 return "buzz"
 *    all other numbers are returned un-changed
 *  @param {number} [num=0] - the number to convert
 *    NUM must be an integer greater than or equal to 0
 *  @returns {number|string} either "fizz", "buzz", "fizzbuzz" or the original number
 */
const fizzbuzz = (num = 0) => {
if (typeof num !== 'number'){
return ("num is not a number");
}
if (Number.isInteger(num) && num >= 0){
  if (num % 15 === 0){
    return ('fizzbuzz');
  } 
  if ( num % 3 === 0) {
    return ('fizz');
  }
  if ( num % 5 === 0) {
    return ('buzz');
  }
  else {
    return num;
  }
} 
  return ("num is not integer or less than zero")

};

/*
Implementation:
- get max number
  - check if given number is a number, otherwise - stop
  - check of given number is  integer and  >= 0, otherwise - stop
- 4 paths:
  - if div 3 & 5 ->  fizzbuzz
  - if div 3 ->  fizz
  - if div 5 ->  buzz
  - else -  number
-return number changed/unchanged

*/

for (const solution of [
  //secretSolution,
  fizzbuzz,
]) {
  describe(solution.name + ': fizbuzzish', () => {
    describe('default parameter is 0', () => {
      it('returns "fizzbuzz" when no argument is passed', () =>
        expect(solution()).toEqual('fizzbuzz'));
    });

    describe('not divisible by 3 or 5', () => {
      it('1', () => {
        expect(solution(1)).toEqual(1);
      });
      it('2', () => {
        expect(solution(2)).toEqual(2);
      });
      it('7', () => {
        expect(solution(7)).toEqual(7);
      });
    });

    describe('only divisible by only 3', () => {
      const expectedValue = 'fizz';
      it('3', () => {
        expect(solution(3)).toEqual(expectedValue);
      });
      it('6', () => {
        expect(solution(6)).toEqual(expectedValue);
      });
      it('9', () => {
        expect(solution(9)).toEqual(expectedValue);
      });
    });

    describe('only divisible by only 5', () => {
      const expectedValue = 'buzz';
      it('5', () => {
        expect(solution(5)).toEqual(expectedValue);
      });
      it('10', () => {
        expect(solution(10)).toEqual(expectedValue);
      });
      it('20', () => {
        expect(solution(20)).toEqual(expectedValue);
      });
    });

    describe('divisible by 5 and 3', () => {
      const expectedValue = 'fizzbuzz';
      it('15', () => {
        expect(solution(15)).toEqual(expectedValue);
      });
      it('30', () => {
        expect(solution(30)).toEqual(expectedValue);
      });
      it('45', () => {
        expect(solution(45)).toEqual(expectedValue);
      });
    });

     describe('input verification', () => {
       it('num less than 0', () => {
        expect(solution(-5)).toEqual("num is not integer or less than zero");
      });
      it('of num is 0', () => {
        expect(solution(0)).toEqual('fizzbuzz');
      });
      it('if num is not integer', () => {
        expect(solution(3.4)).toEqual("num is not integer or less than zero");
      });
      it('if num is not a number', () => {
        expect(solution('F')).toEqual("num is not a number");
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = 0) { if ("number" != typeof a) { throw new TypeError("num is not a number"); } if (0 > a) { throw new RangeError("num is less than 0"); } if (!Number.isInteger(a)) { throw new RangeError("num is not an integer"); } return 0 == a % 3 && 0 == a % 5 ? "fizzbuzz" : 0 == a % 3 ? "fizz" : 0 == a % 5 ? "buzz" : a }
