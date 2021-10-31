var longestPalindromeSubseq = function(s) {
  let dp = [];
  for (let i = 0; i < s.length; i++) {
    dp[i] = [];
    for (let j = 0; j < s.length; j++) {
      dp[i][j] = 0;
    }
    dp[i][i] = 1;
  }
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[0][s.length - 1];
};

