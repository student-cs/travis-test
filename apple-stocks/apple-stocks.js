/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient alogorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 */

function bestProfit(stock_prices_yesterday) {
	//only look for lowest price and highest profit (no need to look for highest stock price)
	//doesn't necessarily work to just find lowest and highest because the highest could occur before the lowest
	//make sure that the stock prices are actually more than 1
	if (stock_prices_yesterday.length < 2){
		return -1*stock_prices_yesterday[0];
	}

	//start initial lowest price as first stock price of day because you can't move backwards in time
	var lowestPrice = stock_prices_yesterday[0];
	//inital profit is buying first stock and selling that stock at the next time
	var profit = stock_prices_yesterday[1] - lowestPrice;
	//run a for loop through the stock prices starting at 1 because the first price stock can't be sold (a stock has to be bought first)
	for (var i = 1; i < stock_prices_yesterday.length; i++){
		//the temporary is the potential profit from selling the stock currently on and the lowest price
		var temp = stock_prices_yesterday[i] - lowestPrice;
		//keep track of lowest stock
		if (stock_prices_yesterday[i] < lowestPrice){
			lowestPrice = stock_prices_yesterday[i];
		}
		//keep track of highest profit
		if (temp > profit){
			profit = temp;
		}

	}
	return profit;
}

module.exports = bestProfit;

