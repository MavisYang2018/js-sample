var t = 0;

function fibonacci(n,x,y) {
	var x1 = x;
	var y1 = y;
	for (var i = 0; i < n; i++) {
		console.log(x1);
		t = x1;
		x1 = y1;
		y1 += t;
	}
}

fibonacci(10,0,1);