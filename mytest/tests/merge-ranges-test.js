var expect = require('expect.js');
var mergeRanges;
try{
	mergeRanges = require(__dirname + '/../merge-ranges/merge-ranges.js');
}catch(e){
  console.log(e);
}
if (mergeRanges){
	describe('description', function() {
	  it('should handle encapsulated times', function() {
	    expect(mergeRanges([[2,3],[1,5]])).to.eql([[1,5]]);
	    expect(mergeRanges([[2,3],[1,5],[6,10],[7,9]])).to.eql([[1,5],[6,10]]);
	  });

	  it('should handle overlapping times', function() {
	    expect(mergeRanges([2,5],[5,7])).to.eql([[2,7]]);
	    expect(mergeRanges([2,5],[5,7],[8,10],[10,12])).to.eql([[2,7],[8,12]]);
	  });
	});
}