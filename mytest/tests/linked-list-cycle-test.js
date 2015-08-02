var expect = require('expect.js');
var hasCycle;
var Node;
try{
  hasCycle = require(__dirname + '/../../linked-list-cycle/linked-list-cycle.js').hasCycle;
  Node = require(__dirname + '/../../linked-list-cycle/linked-list-cycle.js').Node;
}catch(e){
  console.log(e);
}
if (hasCycle && Node){
  describe('Linked List Cycle Tests', function() {
    var node1;
    var node2;
    var node3;
    var node4;
    var node5;
    before(function() {
      node1 = new Node('1');
      node2 = node1.next = new Node('2');
      node3 = node2.next = new Node('3');
      node4 = node3.next = new Node('4');
      node5 = node4.next = new Node('5');
    });

    it('it should return false when no loop is present', function() {
      expect(hasCycle(node1)).to.eql(false);
    });

    after(function() {
       node5.next = node2;
    });

    it('it should return  true when a loop is present', function() {
      expect(hasCycle(node1)).to.eql(true);
    });
  });
}