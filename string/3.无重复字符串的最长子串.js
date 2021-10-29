var lengthOfLongestSubstring = function(s) {
  let right  = 0
  let left = 0
  let res = 0
  let window = {}

  while(right < s.length){

    let r = s[right]
    right++

    window[r] = (window[r] || 0) + 1

    while(window[r] > 1){
      let l = s[left]
      left++
      window[l]--
    }

    res = Math.max(res,right-left)
  }

  return res
};
