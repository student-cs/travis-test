/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *v
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function as well. That is to say, we can have multiple
 *   listeners for an event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

function EventEmitter() {
	this.events = {};
}

EventEmitter.prototype.on = function(name, func){
	if (this.events[name] === undefined){
		var value = [];
		value.push(func);
		this.events[name] = value;
	}else {
		this.events[name].push(func);
	}
}

EventEmitter.prototype.trigger = function(name){
	var addArgs = [];
	if (arguments[1] !== undefined){
		addArgs = Array.prototype.slice.call(arguments, 1);
	}

	var funcArray = this.events[name];
	for (var i = 0; i < funcArray.length; i++){
		var funcRun = funcArray[i];
		//iin the event that
		//a single name ('increment') has two functions: function1() and function2(param)
		//and the trigger is called: instance.trigger('increment') 
		//this will make sure that function2(param) is not run because note nough parameters are passed through
		//if it shoul return an error, you could just remove the if condition
		if (funcRun.length === addArgs.length){
			funcRun.apply(this, addArgs);
		}
	}
}
