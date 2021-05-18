'use strict';

/**
 * removes all odd numbers from an array of numbers
 * does not modify the argument (no side-effects)
 * @param {number[]} arrayOfNumbers - the array of numbers to filter
 * @returns {number[]} an array with only even numbers
 */
const stub = (arr) => {
  if (!Array.isArray(arr)){
    return ('this is not an array!')
  }
let arrayOfNumbers = [...arr];
let onlyEven = [];
for (let i = 0; i <= arrayOfNumbers.length; i++){
 
   if (arrayOfNumbers[i] % 2 === 0){
  onlyEven.push(arrayOfNumbers[i]);
  }
}
return onlyEven;
};

console.log(stub([2, 3, 6, 0 , 7, 24]));

/*
Implementation:
- get numbers
- copy array
- loop through
- if num % 2 = 0 -> even, rest - odd
- if even - push into array
*/

for (const solution of [
  //secretSolution,
   stub
]) {
  describe(solution.name + ': selects even numbers from a given array', () => {
    describe('even an/or odd', () => {
      it('only even', () => {
        expect(solution([0, 2, 14, 6, 98])).toEqual([0, 2, 14, 6, 98]);
      });
      it('only odd', () => {
        expect(solution([1, 1013, 5, 177, 99])).toEqual([])
      });
      it('even and odd', () => {
        expect(solution([0, 18, 33, 27, 65, 24])).toEqual([0, 18, 24])
      });
      it('even and odd, negative', () => {
        expect(solution([-3, -100, -21, -1046, -97])).toEqual([-100, -1046])
      });
      it('even and odd, negative and positive', () => {
        expect(solution([0, -6, 12, 444, 283, - 678, 197643])).toEqual([0, -6, 12, 444, - 678])
      });
      
    });
  });
   
   describe('what could go wrong', () => {
     it('arrayOfNumbers is not an array', () => {
        expect(solution(0, 2, 14, 6, 98)).toEqual('this is not an array!');
      });
      it('arrayOfNumbers is not an array', () => {
        expect(solution(0, 2, 14, 6, 98)).toEqual('this is not an array!');
      });
    });
  
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfNumbers is not an array"); } const b = a.some(a => "number" != typeof a); if (b) { throw new TypeError("arrayOfNumbers does not contain only numbers"); } const c = a.filter(a => 0 == a % 2); return c }
