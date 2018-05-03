
var a = [2,5,4,1,3];

//
// return max elem
//
function max(n) {
	var m = n[0];
	var i = 0;
	while (i < n.length) {
		if (a[i] > m) {m = a[i];}
		i++;
	}
	return m;
}

console.log(max(a));
//
// output : 5
//