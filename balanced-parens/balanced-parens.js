/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
function balancedParens(input){
	var parens = ['(', ')', '{', '}', '[', ']'];
	var trimmed = "";
	var stack = [];
	for (var i = 0; i < input.length; i++){
		var character = input.charAt(i);
		if (parens.indexOf(character) !== -1){
			trimmed += character;
		}
	}
	for (var j = 0; j < trimmed.length; j++){
		var index = parens.indexOf(trimmed.charAt(j));
		if (index%2 === 0){
			stack.push(index + 1);
		}else {
			if (stack.length === 0){
				return false;
			}
			var pop = stack[stack.length-1];
			stack.length -= 1;
			if (index !== pop){
				return false;
			}
		}
	}
	return true;


}
