'use strict';

/**
 * A function that takes an array of strings, reverses it, and combines the strings
 * it does not modify the original array
 * @param {string[]} arrayOfStrings - an array of strings to concatenate, in reverse order
 * @returns {string} - the array elements joined together, in reverse order
 */
'use strict'

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

console.log(mixArray1([true, '8', 9]));

/*Implementation:


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
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings does not contain only strings"); } return [...a].reverse().reduce((a, b) => a + b, "") }
