function mergeRanges(array) {
	var map = {};
	var time = 100;
	for (var i =0; i <array.length; i++){
		if (map[array[i][0]] < array[i][1] || map[array[i][0]] === undefined){
			map[array[i][0]] = array[i][1];
		}
		if (array[i][0] < time){
			time = array[i][0];
		}
	}
	var previous;
	var prev;
	for (key in map){
		if (previous){
			if (key <= prev){
				map[previous] = Math.max(map[key], prev);
				delete map[key];
			}else{
				previous = key;
				prev = map[key];
			}	
		}else{
			previous = key;
			prev = map[key];
		}
	}	
	var ret = [];
	for(key in map){
		ret.push([parseInt(key), map[key]]);
	}
	return ret;
}