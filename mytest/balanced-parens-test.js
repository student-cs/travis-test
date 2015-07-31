var expect = require('expect.js');
var balancedParens;
try{
  balancedParens = require(__dirname + '/../balanced-parens/balanced-parens.js');
}catch(e){
  console.log(e);
}
if (balancedParens){
  describe('Balanced Parens Test', function() {
    it('should return true when parens are balanced', function() {
      expect(balancedParens('()')).to.eql(true);
      expect(balancedParens('(())')).to.eql(true);
    });

    it('should return false when parents are not balanced', function() {
      expect(balancedParens(')(')).to.eql(false);
      expect(balancedParens('(')).to.eql(false);
    });

    it('should work with multiple types of brackets', function() {
      expect(balancedParens('[](){}')).to.eql(true);
      expect(balancedParens('[({})]')).to.eql(true);
      expect(balancedParens('[(]{)}')).to.eql(false);
    });

    it('should work when extra character are added', function() {
      expect(balancedParens(' var wow  = { yo: thisIsAwesome() }')).to.eql(true);
      expect(balancedParens(' var hubble = function() { telescopes.awesome();')).to.eql(false);
    });
  });
}