/**
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 * @param {number[]} nums
 * @return {number[][]}
 */
let subset = (nums)=>{
  let result = []
  const backtrack = (path,l,start)=>{
    if(path.length === l){
      result.push(path)
      return
    }
    for(let i = start;i<nums.length;i++){
      backtrack(path.concat(nums[i]),l,i+1)
    }
  }

  for(let i = 0;i<nums.length+1;i++){
    backtrack([],i,0)
  }

  return result
}




console.log(subset([1, 2, 3]));
