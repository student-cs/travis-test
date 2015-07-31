/**
 * Given an array_of_ints, find the highest_product you can get from three of the integers.
 */

function highestProduct(array) {
	if (array.length < 3){
		return -1;
	}
	array.sort();
	var last = array.length -1;
	return array[last-2]*array[last-1]*array[last];
}