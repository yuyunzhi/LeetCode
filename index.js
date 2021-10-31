// 初始化dp dp[i] dp[i][j]
// dp的值是 Infinity 还是1 还是 0

// 遍历 几次


// 动态方程

// dp[n] = Math.max(dp[n],dp[n-1]+1)
// dp[n] = dp[n-1] + dp[n-2]
// dp[n] = Math.max(nums[n],dp[n-1] + nums[n])
// dp[i][j] = Math.max(dp[i][j],dp[i-1][j-1] + 2)
// dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])


// dp[i] = Math.max(dp[i], dp[i-1] + 1)


var maxEnvelopes = function(envelopes) {
  let newEnvelopes = envelopes.sort((a,b)=>a[0]-b[0])
  console.log(newEnvelopes);
};

maxEnvelopes([[5,4],[6,4],[6,7],[2,3]])

