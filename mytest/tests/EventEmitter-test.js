var expect = require('expect.js');
var EventEmitter;
try{
  EventEmitter = require(__dirname + '/../../EventEmitter/EventEmitter.js');
}catch(e){
  console.log(e);
}
if (EventEmitter){
  describe('EventEmitter Tests', function() {
    var instance;
    beforeEach(function() {
      instance = new EventEmitter();
    });
    it('should trigger with one event listener', function() {
      var count = 0;
      instance.on('increment',function() {
         count++;
      });
      instance.trigger('increment');
      expect(count).to.eql(1);
    });

    it('should handle multiple listeners', function() {
      var count = 0;
      var count_2 = 0;
      instance.on('increment',function() {
        count++;
      });
      instance.on('increment_2',function() {
        count_2++;
      });
      instance.trigger('increment');
      expect(count).to.eql(1);
      expect(count_2).to.eql(0);
      instance.trigger('increment_2');
      expect(count).to.eql(1);
      expect(count_2).to.eql(1);
    });

    it('should handle mulitple listeners on the same event', function() {
      var count = 0;
      var count_2 = 0;
      instance.on('increment',function() {
        count++;
      });
      instance.on('increment',function() {
        count_2++;
      });
      expect(count).to.eql(1);
      expect(count_2).to.eql(1);
    });
  });
}