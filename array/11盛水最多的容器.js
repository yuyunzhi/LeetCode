var maxArea = function(height) {
  let n = height.length;
  let left = 0, right = n - 1;
  let maxOpacity = 0;
  while (left < right) {
    let res = Math.min(height[left], height[right]) * (right - left);
    maxOpacity = Math.max(maxOpacity, res);
    if (height[left] < height[right]) left++
    else right--;
  }
  return maxOpacity;
};
