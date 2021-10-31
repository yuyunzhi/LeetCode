var maxEnvelopes = function (envelopes) {

  if (envelopes.length === 1) return 1;

  envelopes.sort((a, b) => {
    return a[0] - b[0];
  });

  let LISArr = [];
  for (let [key, value] of envelopes) {
    LISArr.push(value);
  }
  console.log( LISArr);

  let dp = new Array(LISArr.length).fill(1)

  for(let i = 1;i<LISArr.length ;i++){
    for(let j = 0 ;j< i;j++){
      if(LISArr[i]>LISArr[j]){
        dp[i] = Math.max(dp[i],dp[j]+1)
      }
    }
  }

  return Math.max(...dp)
};

console.log(maxEnvelopes([[2, 3], [5, 4], [6, 4], [6, 7]]));

