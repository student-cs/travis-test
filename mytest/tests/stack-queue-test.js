var expect = require('expect.js');
var Stack;
var Queue;
try{
  Stack = require(__dirname + '/../../stack-queue/stack-queue.js').Stack;
  Queue = require(__dirname + '/../../stack-queue/stack-queue.js').Queue;
}catch(e){
  console.log(e);
}
if (Stack){
  describe('Stack-Queue Tests', function() {
    var stack;

    beforeEach(function() {
      stack = new Stack();
    });

    it('should have a push and pop method', function() {
      expect(stack).to.have.property('push');
      expect(stack).to.have.property('pop');
      expect(stack.push).to.be.a('function');
      expect(stack.pop).to.be.a('function');
    });

    it('should push elements to stack', function() {
      stack.push(0);
      expect(stack.pop()).to.eql(0);
    });

    it('should pop most recently pushed elements', function() {
      stack.push(1);
      stack.push(2);
      expect(stack.pop()).to.eql(2);
      expect(stack.pop()).to.eql(1);
    });

    it('should return undefined when popping empty stack', function() {
      expect(stack.pop()).to.eql(undefined);
      stack.push(0);
      stack.push(1);
      expect(stack.pop()).to.eql(1);
      expect(stack.pop()).to.eql(0);
    });

    var queue;
    beforeEach(function() {
      queue = new Queue();
    });

    it('should have enqueue and dequeue method', function() {
      expect(queue).to.have.property('enqueue');
      expect(queue).to.have.property('dequeue');
      expect(queue.dequeue).to.be.a('function');
      expect(queue.enqueue).to.be.a('function');
    });

    it('should push elements to queue', function() {
      queue.enqueue(0);
      expect(queue.dequeue()).to.eql(0);
    });

    it('should pop most recently pushed elements', function() {
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.dequeue()).to.eql(1);
      expect(queue.dequeue()).to.eql(2);
    });

    it('should return undefined when popping empty queue', function() {
      expect(queue.dequeue()).to.eql(undefined);
      queue.enqueue(0);
      queue.enqueue(1);
      expect(queue.dequeue()).to.eql(0);
      expect(queue.dequeue()).to.eql(1);
    });

  });
}