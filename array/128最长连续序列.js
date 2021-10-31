var longestConsecutive = function(nums) {
  if (nums.length === 0) return 0;
  const set = new Set(nums);
  const n = nums.length;
  let globalLongest = 1;
  for (let i = 0; i < n; i++) {
    if (!set.has(nums[i] - 1)) {
      let longest = 1;
      let currentNum = nums[i];
      while (set.has(currentNum + 1)) {
        currentNum += 1;
        longest++;
      }
      globalLongest = Math.max(globalLongest, longest);
    }
  }
  return globalLongest;
};

