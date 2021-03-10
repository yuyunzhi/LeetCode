/*
给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。

链接：https://leetcode-cn.com/problems/merge-sorted-array
 */


const merge = (nums1, m, nums2, n) => {
  let i = nums1.length - 1
  m--
  n--
  while (n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[i--] = nums1[m--]
    } else {
      nums1[i--] = nums2[n--]
    }
  }
}
