/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
	this.stack = [];
}
Stack.prototype.push = function(input){
	this.stack.unshift(input);
}
Stack.prototype.pop = function(){
	return this.stack.shift();
}
/**
  * Queue Class
  */
function Queue() {
	this.stack1 = new Stack();
	this.stack2 = new Stack();
}

Queue.prototype.push = function(input){
	this.stack1.push(input);
}
Queue.prototype.pop = function(){
	while(this.stack1.stack.length > 0){
		this.stack2.push(this.stack1.pop());
	}
	return this.stack2.pop();
}


module.exports = Stack;
