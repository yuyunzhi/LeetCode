
var minWindow = function(s, t) {
  let window = {}
  let left = 0
  let right = 0
  let res = null
  let need = {}

  while(right < s.length){
    // 取出右边
    let r = s[right]
    right++
    window[r] = (window[r] || 0) +1

    /**条件判断**/



    // 不满足条件判断 left++
    // while(window[r] > 1){
    //   let l = s[left]
    //   left++
    //   window[l]--
    // }


    // 满足条件 则获取最新值

    // update res

    return res
  }
};
console.log(minWindow("ADOBECODEBANC", 'ABC'));
