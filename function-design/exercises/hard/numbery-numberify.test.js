'use strict';

/**
 * takes an array of strings and returns a new array of numbers
 *  the new array contains all the numbery strings, cast to numbers
 * does not modify the argument (no side-effects)
 * @param {string[]} arrayOfStrings - the array of strings
 * @returns {number[]} an array containing only numbers, and not NaN
 * @example
 *  ['1', '2', 'e', '.'] // --> [1, 2]
 */
const mixArray1 = (arr = []) => {
  let cloneArray =[...arr];
  let newArray =[];
  for(let index = 0; index <= cloneArray.length; index++){
    if (typeof cloneArray[index] === 'boolean') {
      continue;
    }
    let itemToPush = Number(cloneArray[index]);
    if(Number.isNaN(itemToPush)){
    continue;
   } else if (typeof itemToPush === 'number'){
   newArray.push(itemToPush)
   }
   }
  return newArray
  }

/*

*/

for (const solution of [
  secretSolution,
  // stub
]) {
  describe(solution.name + ': _', () => {
    describe('_', () => {
      it('_', () => {});
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings contains non-strings"); } const c = a.map(a => +a), d = c.filter(a => !Number.isNaN(a)); return d }
