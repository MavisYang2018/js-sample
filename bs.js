var a = [5,1,10,2,9,8,7,4,6,3];

function bs () {
	for (var i = a.length - 1; i >= 0; i--) {
		for (var j = a.length - 1; j >= 0; j--) {
				if (a[j] < a[i]) {
				var t = a[i];
				a[i] = a[j];
				a[j] = t;
			}
		}
	}
}

bs();
console.log(a);