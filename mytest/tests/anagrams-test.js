var expect = require('expect.js');
var anagrams;
try{
  anagrams = require(__dirname + '/../../anagrams/anagrams.js');
}catch(e){
  console.log(e);
}
if (anagrams){
  describe('Anagrams Test', function() {
    it('should return empty array for empty string', function() {
      expect(anagrams('')).to.eql([]);
    });

    it('should find all anagrams', function() {
      expect(anagrams('a')).to.eql(['a']);
      expect(anagrams('ab')).to.eql(['ab','ba']);
      expect(anagrams('abc')).to.eql(['abc','acb','bac','bca','cab','cba']);
    });

    it('should not return duplicate anagrams', function() {
      expect(anagrams('aa')).to.eql(['aa']);
      expect(anagrams('aab')).to.eql(['aab','aba','baa']);
      expect(anagrams('aabb')).to.eql(['aabb','bbaa','abba','baba','abab','baab'].sort());
    });
  });
}