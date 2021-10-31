var maxProfit = function(prices) {
  let minprice = Infinity
  let maxprofit = 0
  for(let i = 0; i < prices.length; i++) {
    minprice = Math.min(prices[i], minprice) // 第i天之前的最低股票价格
    maxprofit = Math.max(maxprofit, prices[i]-minprice) // 第i天时股票可以获取的最大利润
  }
  return maxprofit

};
