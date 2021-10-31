const coinChange = (coins, amount) => {
  let dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      console.log('dp ',i ,dp[i]);
      dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      console.log('coin',coin,'i',i,'dp',dp[i]);
      break
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
}


console.log(coinChange([1,2,5],11));
// 第一层循环
//  coin 1,2,5

// 第二层循环


// 11 元

// dp(0) = 0
// coin = 1
//     dp(1) = Math.min(dp[1],dp[0] + 1)
//     dp(2) = Math.min (dp[2],dp[1] + 1)
//     ……
//     dp(11) = Math.min (dp[11],dp[10] + 1)

// coin = 2
//     dp(2) = Math.min (dp[2],dp[0] + 1)
//     ……
//     dp(11) = Math.min (dp[11],dp[9] + 1)

// coin = 5
//     dp(5) = Math.min (dp[5],dp[0] + 1)
//     ……
//     dp(11) = Math.min (dp[11],dp[6] + 1)


//  dp(11) = 1 + dp(10) // 1元
// dp(11) = 1 + dp(9)  // 2元
// dp(11) = 1 + dp(6)  // 5元
