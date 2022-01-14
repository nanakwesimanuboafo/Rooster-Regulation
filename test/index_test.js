const assert = require('assert');
const Rooster = require('../index');

describe('rooster',()=>{
  describe('announceDawn',()=>{

    it('returns a rooster call',()=>{
      //setup
  const expected = 'cock-a-doodle-doo!';

      //exercise
  const value = Rooster.announceDawn();

    //verify
  assert.equal(value,expected);
    });
  });


  describe('.timeAtDawn',()=>{
      it ('returns its argument as a string',()=>{
       //setup
        const number = 12;
        const expected = '12';

          //exercise
        const value = Rooster.timeAtDawn(number);

          //verify
        assert.equal(value,expected);
      });

      it('throws an error if passed a number less than 0',()=>{
        
      //setup
        const number = -1;
        const expected = RangeError;

          //verify
        assert.throws(()=>{
         Rooster.timeAtDawn(number);
        }, expected);
      });

      it('throws an error if passed a number greater than 23',()=>{
        
      //setup
        const number = 24;
        const expected = RangeError;

          //verify
        assert.throws(()=>{
         Rooster.timeAtDawn(number);
        }, expected);
      });

      });
  });

