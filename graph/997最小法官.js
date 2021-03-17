/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
  let attack = new Array(N).fill(0) // 攻  去相信
  let accept = new Array(N).fill(0) // 受  被相信

  for(let [a,b] of trust){
    attack[a-1]++
    accept[b-1]++
  }

  for(let i = 0;i<N;i++){
    if(attack[i] === 0 && accept[i] ===(N-1)){
      return i+1
      break
    }
  }

  return -1

}
