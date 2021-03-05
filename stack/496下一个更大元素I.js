/**
 * 给你两个 没有重复元素 的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。

 请你找出 nums1 中每个元素在 nums2 中的下一个比其大的值。

 nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出 -1 。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/next-greater-element-i
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let nextGreaterElement1 = function (nums1, nums2) {
  let hash = {}
  for (let i = 0; i < nums2.length; i++) {
    // nums2[i] // 1,3,4,2
    hash[nums2[i]] = i  // {1:0,3:1,4:2,2:3}
  }

  let result = []
  for (let i = 0; i < nums1.length; i++) {
    const nums2Index = hash[nums1[i]]
    for (let j = nums2Index + 1; j < nums2.length; j++) {
       if(nums2[j] > nums1[i] ) {
         result.push(nums2[j])
         break
       }
    }
    result.length !==  i + 1 && result.push(-1)
  }

  return result
};

let nextGreaterElement = function (nums1, nums2){
  let hash = {}
  let stack = []
  for (let i = 0; i < nums2.length; i++) {
    stack.push(nums2[i])
    if(i !== nums2.length - 1){
      for(let j = stack.length-1; j >=0 ; j--){
         if( nums2[i+1] > stack[j] ){
           hash[stack[j]] = nums2[i+1]
           stack.pop()
         }else{
           break
         }
      }
    }

  }

  let result = []
  for(let i = 0 ;i<nums1.length; i++){
    result.push(hash[nums1[i]] ? hash[nums1[i]] : -1)
  }
  return result
}

console.log(nextGreaterElement(nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]));
