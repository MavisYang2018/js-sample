var a = [5,1,10,2,9,4,8,7,4,6,3];

function isExist (arr,t) {
	var i = 0;
	while (i < arr.lenght) {
		if (arr[i] == t) {
			return true;
		}
	}
	return false;
}

var b = isExist(a,11);

console.log(b);
