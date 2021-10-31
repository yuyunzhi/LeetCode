var maxSubArray = function(nums) {
  let maxSum = -Infinity;
  let dp = [], n = nums.length;
  for (let i = -1; i < n; i++) {
    dp[i] = 0;
  }
  for(let i = 0;i<nums.length;i++){
    dp[i] = Math.max(nums[i],dp[i-1]+nums[i])
  }

  return Math.max(...dp);
};
