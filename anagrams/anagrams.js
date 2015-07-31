/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */
// abcd
function anagrams(string) {
	if (string.length === 1){
		return [string];
	}
	var combos = {};
	for (var i = 0; i < string.length; i++){
		var letter = string.charAt(i);
		var rest = string.replace(letter, "");
		var subCombos = anagrams(rest);
		for (var j = 0; j < subCombos.length; j++){
			var word = letter + subCombos[j];
			combos[word]=true;
		}
	}
	return Object.keys(combos);
}

