var lastStoneWeight = function(stones) {
  if(stones.length === 1) return stones[0]

  let temp = [...stones].sort((a,b)=>a-b)
  while(temp.length>=2){
    const stones1 = temp.pop()
    const stones2 = temp.pop()

    let stones3 = stones1 === stones2 ? 0 : Math.abs(stones1 - stones2)

    if(stones3>0){
      temp.unshift(stones3)
      temp.sort((a,b)=>a-b)
    }
  }

  return temp.length === 0 ? 0 : temp[0]
};
console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
