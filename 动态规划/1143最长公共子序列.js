var longestCommonSubsequence = function(text1, text2) {

  let n1 = text1.length, n2 = text2.length;
  let dp = [];
  for (let i = -1; i < n1; i++) {
    dp[i] = [];
    for (let j = -1; j < n2;j++) {
      dp[i][j] = 0;
    }
  }

  for(let i = 0 ;i<text1.length;i++){
    for(let j = 0;j<text2.length;j++){
      if(text1[i] === text2[j]){
        dp[i][j] = Math.max(dp[i][j],dp[i-1][j-1] + 1 )
      }else{
        dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
      }
    }
  }

  return dp[n1-1][n2-1]
};
