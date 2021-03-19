/*
在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

示例 1:

输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
示例 2:

输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4

链接：https://leetcode-cn.com/problems/kth-largest-element-in-an-array
 */
// var findKthLargest = function(nums, k) {
//   nums.sort((a,b)=>a-b)
//   return nums[nums.length-k]
// };

import MinHeap from './minHeap'

var findKthLargest = function(nums, k) {
    const h = new MinHeap()
    nums.for(n=>{
      h.insert(n)
      if(h.size()>k){
        h.pop()
      }
    })
    return h.peek()
};
