'use strict';


/**
 *  returns an array with length "max" CREATE ARRAY AS LONG WE PASS
 *    each index that's divisible by 3 and 5 stores "fizzbuzz"
 *    each index that's divisible by only 3 stores "fizz"
 *    each index that's divisible by only 5 stores "buzz"
 *    all other indexes store the same number as that index
 *  @param {number} [max=0] - how many numbers to check
 *    max must be an integer greater than or equal to 0
 *  @returns {(number|string)[]} an array of length max
 */
const stub = (max = 0) => {
  if(max === 0) {
    return 'fizbuzz';
  }
  const result = new Array(max);

  //result[0] = 'fizzbuzz';
  for(let i = 0; i < max; i++){
    if (i % 3 === 0 &&  i % 5 === 0)
  result[i] = 'fizzbuzz';
  }
  else if (i % 3) {
    result[i] = 'fizz';
  //add fizz
  }
  else if (i % 5) {
  result[i] = 'buzz';

  }else{
    result[i] = i;
  }
  return result;
  }
/*  describe this solution's strategy
 */
const whileLoop = max => {
  let countUp = _;
  const result = [];
  while (++countUp < max) {
    const nextEntry = countUp % 15 === 0 ? '_' : _ ? 'buzz' : _ ? 'fizz' : _;
    result.push(nextEntry);
  }
  return result;
};

/* describe this solution's strategy
 */
const oneLineforLoop = max => {
  const result = [];
  for (let i = 0; i < _; )
    result._((++i % _ ? '' : '_') + (i % _ ? '' : '_') || i);
  return result;

  // https://codeburst.io/javascript-breaking-down-the-shortest-possible-fizzbuzz-answer-94a0ad9d128a
};

/* describe this solution's strategy
 */
const manySmallFunctions = max => {
  const threeDivides = n => n % _ === 0;
  const fiveDivides = n => n % _ === 0;
  const fifteenDivides = n => n % _ === 0;

  const fizzbuzzOrNumber = num => {
    if ((i % 3 === 0) && ( i % 5 === 0)) {
      return 'fizzbuzz';
    } else if (i % 3 === 0) {
      return 'fizz';
    } else if (i % 5 === 0) {
      return 'buzz';
    } else {
      return num;
    }
  };

  // https://stackoverflow.com/a/33352604
  const arrayOfIndexes = [...Array(max).keys()];
  const fizzBuzzedArray = arrayOfIndexes.map(_);
  return fizzBuzzedArray;
};

/*

*/

for (const solution of [
  secretSolution,
  // stub,
  // whileLoop,
  // oneLineforLoop,
  // manySmallFunctions,
]) {
  describe(solution.name + ': fizzbuzz', () => {
    describe('numbers divisible by 3', () => {
      it('3', () => {
        expect(solution(3)).toEqual(['fizzbuzz', 1, 2]);
      });
      // write more of these
    });
    describe('numbers divisible by neither 3 nor 5', () => {
      it('4', () => {
        expect(solution(4)).toEqual(['fizzbuzz', 1, 2, 'fizz']);
      });
      // write more of these
    });
    describe('numbers divisible by 5', () => {
      it('5', () => {
        expect(solution(5)).toEqual(['fizzbuzz', 1, 2, 'fizz', 4]);
      });
      // write more of these
    });
    describe('numbers divisible by 3 and 5', () => {
      it('15', () => {
        expect(solution(15)).toEqual([
          'fizzbuzz',
          1,
          2,
          'fizz',
          4,
          'buzz',
          'fizz',
          7,
          8,
          'fizz',
          'buzz',
          11,
          'fizz',
          13,
          14,
        ]);
      });
      // write more of these
    });
  });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) { if ("number" != typeof a) { throw new TypeError("max is not a number"); } if (0 > a) { throw new RangeError("max is less than 0"); } if (!Number.isInteger(a)) { throw new RangeError("max is not an integer"); } const b = []; for (let c = 0; c < a; c++) { 0 == c % 3 && 0 == c % 5 ? b.push("fizzbuzz") : 0 == c % 3 ? b.push("fizz") : 0 == c % 5 ? b.push("buzz") : b.push(c); } return b; }
