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

var maxArea = function(height) {
  let n = height.length;

  let maxOpacity = 0;
  for(let i = 0;i<n - 1;i++){
    for(let j = i+1;j<n;j++){
      const sq = (j-i)* Math.min(height[i], height[j])
      console.log(sq);
      maxOpacity = Math.max(maxOpacity, sq);
    }
  }


  return maxOpacity;

};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
