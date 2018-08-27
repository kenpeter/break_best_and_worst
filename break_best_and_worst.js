
function breakingRecords(score) {
	var badArr = [];
	var goodArr = [];
	var badFlagArr = [];
	var goodFlagArr = [];

	for(var i=0; i<score.length; i++) {
		var item = score[i];
		if(i == 0) {
			badArr.push(item);
			goodArr.push(item);
			badFlagArr.push(0);
			goodFlagArr.push(0);
			continue;	
		}

		// Look back last one
		var lastBadItem = badArr[i-1];
		var lastGoodItem = goodArr[i-1];
		if(item < lastBadItem) {
			badArr.push(item);
      goodArr.push(lastGoodItem);
      badFlagArr.push(1);
      goodFlagArr.push(0);

		} else if(item > lastGoodItem) {
			badArr.push(lastBadItem);
      goodArr.push(item);
      badFlagArr.push(0);
      goodFlagArr.push(1);
		}
		else {
			badArr.push(lastBadItem);
      goodArr.push(lastGoodItem);
      badFlagArr.push(0);
      goodFlagArr.push(0);
		}

		/*
		// test
		console.log('-- each --');
  	console.log(badArr);
  	console.log(goodArr);
  	console.log(badFlagArr);
  	console.log(goodFlagArr);
		*/
	}

	/*
	// test
	console.log(badArr);
	console.log(goodArr);
	console.log(badFlagArr);
	console.log(goodFlagArr);
	*/
	
	var goodLen = goodArr.reduce(function(a, b) {
		return a+b;
	});

	var badLen = badArr.reduce(function(a, b) {
		return a+b;
	});

	var resArr = [goodLen, badLen];

	return resArr;
}


//var input = [ 10, 5, 20, 20, 4, 5, 2, 25, 1 ];
var input = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
var out = breakingRecords(input);
