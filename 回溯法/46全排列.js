/**
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let result  = []
  const backtrack = (path) => {
    if(path.length === nums.length){
      result.push(path)
      return
    }
    console.log(path);
    nums.forEach(n=>{
      if(path.includes(n)) return
      backtrack(path.concat(n))
    })
  }

  backtrack([])
  return result
};
console.log(permute([1,2,3]));
