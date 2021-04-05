var guessNumber = function(n) {
  let low = 1
  let high = n
  while(low <= high){
    const mid = Math.floor((low+high)/2)
    const res = guess(mid)
    if(res === 0){
      return mid
    }else if(res ===1){
      low = mid + 1
    }else{
      high = mid -1
    }
  }
};
