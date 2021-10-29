var findMedianSortedArrays = function(nums1, nums2) {
  let arr = nums1.concat(nums2).sort((a,b)=>a-b)

  let len = arr.length
  console.log(arr);
  if(len % 2 === 0){
    let end = len /2
    let start = end - 1
    return  (arr[end] + arr[start]) / 2
  }else{
    return arr[Math.ceil(len/2 - 1)]
  }
};


console.log(findMedianSortedArrays([3], [-2,-1]));
