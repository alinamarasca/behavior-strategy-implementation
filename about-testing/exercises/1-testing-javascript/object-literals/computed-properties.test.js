'use strict';
'use strict';
describe('computed properties', () => {
  describe('types of tasty treats', () => {
    const wet = 'soup';
    const dry = 'bread';
    const obj = {
      [wet]: 'wet',
      [dry]:'dry',
    };
    it('obj.soup', () => {
      expect(obj.soup).toEqual('wet');
    });
    it('obj.dry', () => {
      expect(obj.bread).toEqual('dry');
    });
  });
  describe('a menagerie', () => {
    const swimming = 'mackerel';
    const mackerel = 'swimming';
    const inTheSky = 'flying';
    const obj = {
      [inTheSky]: 'flying',
      [mackerel]: 'mackerel', // use existing variables to complete this one
      running: 'cheetah',
    };
    it('obj.flying', () => {
      expect(obj.flying).toEqual(inTheSky);
    });
    it('obj.running', () => {
      expect(obj.running).toEqual('cheetah');
    });
    it('obj.swimming', () => {
      expect(obj.swimming).toEqual('mackerel');
    });
  });
});


// describe('computed properties', () => {
//   describe('types of tasty treats', () => {
//     const wet = 'soup';
//     const dry = 'bread';
//     const obj = {
//       [wet]: 'wet',
//       [dry]: 'dry',
//     };
//     it('obj.soup', () => {
//       expect(obj.soup).toEqual('wet');
//     });
//     it('obj.dry', () => {
//       expect(obj.bread).toEqual('dry');
//     });
//   });
//   describe('a menagerie', () => {
//     const swimming = 'mackerel'; //swimming and mackerel r same
//     const mackerel = 'swimming'; //swimming and mackerel r same
//     const inTheSky = 'flying';
//     const obj = {
//       [inTheSky]: 'flying',
//       [mackerel]: 'mackerel', // use existing variables to complete this one
//       running: 'cheetah', //must assign
//     };
//     it('obj.flying', () => {
//       expect(obj.flying).toEqual(inTheSky);
//     });
//     it('obj.running', () => {
//       expect(running).toEqual('cheetah');
//     });
//     it('obj.swimming', () => {
//       expect(obj.swimming).toEqual('mackerel');
//     });
//   });
// });
