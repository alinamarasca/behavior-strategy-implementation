'use strict';

/**
 * reverses a string and sets all the characters to upper or lower case
 * @param {string} [text=''] - the text to reverse and casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the reversed text in all lower or upper case
 */
const stub = (text = (''), lowerCase = true) => {
  let reversed = text.split("").reverse().join("");
  lowerCase = confirm('OK -> lower case, CANCEL -> upper case');
  if (lowerCase){
    return reversed.toLowerCase();
  }else{
    return reversed.toUpperCase();
  }
  };
//stub('wtf');
/*
  -get string
  -reverse it
  -ask if want upeer/lowercase
  -do case
  -give back or casified or not
*/

for (const solution of [
  //secretSolution,
   stub
]) {
  describe(
    solution.name + ': reverses a string then sets to lower or upper case',
    () => {
      describe("the function's default parameters", () => {
// GENERal CASES
        it('second parameter defaults to true', () => {
          expect(solution('asdf')).toEqual('fdsa'); 
        });
        it('first parameter defaults to an empty string', () => {
          expect(solution()).toEqual('');
        });
      });
      // write the tests indicated by the comments
// separate lower and upper
      describe('when set to lower case', () => {
        alert('say OK');
        
        it('when the text is an empty string', () => {
          expect(solution('', true)).toEqual('');
        });

        it('when the text is all upper case', () => {
          expect(solution('MEOW', true)).toEqual('woem');
        });
        
        it('when the text is all lower case', () => {
          expect(solution('meow', true)).toEqual('woem');
        });

        it ('when the text is mixed upper and lower case', () => {
          expect(solution('MeOw',true)).toEqual('woem');
        });

        it ('when the text contains punctuation', () => {
          expect(solution('meow!',true)).toEqual('!woem');
        });

        it('when the text contains numbers', () => {
          expect(solution('MEOW13',true)).toEqual('31woem');
        });

      });

      describe('when set to upper case', () => {
        alert('say CANCEL');
        it('when the text is an empty string', () => {
          expect(solution('', false)).toEqual('');
        });

        it('when the text is all upper case', () => {
          expect(solution('WOOF', false)).toEqual('FOOW');
        });
        
        it('when the text is all lower case', () => {
          expect(solution('woof',false)).toEqual('FOOW');
        });

        it ('when the text is mixed upper and lower case', () => {
          expect(solution('wOoF',false)).toEqual('FOOW');
        });

        it ('when the text contains punctuation', () => {
          expect(solution('...WOOF',false)).toEqual('FOOW...');
        });

        it('when the text contains numbers', () => {
          expect(solution('woof27',false)).toEqual('72FOOW');
        });

       });
    }
  );
}
    
   

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; for (let d = a.length - 1; 0 <= d; d--)c += a[d]; let d = ""; return d = b ? c.toLowerCase() : c.toUpperCase(), d }
