/**
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if(nums.length === 0) return []
  if(nums.length === 1) return [nums]

  let result = [[nums[0]]]
  for(let i = 1; i<nums.length ; i++){
    let x = []
    result.forEach(itemNums=>{
      for(let j = 0 ;j<itemNums.length+1;j++){
        const temp = JSON.parse(JSON.stringify(itemNums))
        temp.splice(j,0,nums[i])
        x.push(temp)
      }
    })
    result = x
  }

  return result
};
