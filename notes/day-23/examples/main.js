function getMaxProfit(prices) {
	var lowestPrice = prices[0];
	var maxProfit = 0;
	for(var index = 0; index < prices.length; index++) {
		if(prices[index] - lowestPrice > maxProfit) {
			maxProfit = prices[index] - lowestPrice;
		}
		if(prices[index] < lowestPrice) {
			lowestPrice = prices[index];
		}
	}
	return maxProfit;
}

var result = getMaxProfit([80, 47, 75, 34, 58, 83, 41, 75, 100]);
console.log(result);
console.assert(result === 66);

// var stockPricesYesterday = []


// length		calculations
// 1			1
// 2			4
// 3			9
// 4			16
// 5			25
// 6			36

// O(n^2)


// length		calculations
// 1			1
// 2			2
// 3			3
// 4			4

// length		calculations
// 1			5
// 2			10
// 3			15
// 4			20
// 5			25
// 6			30

// O(n)