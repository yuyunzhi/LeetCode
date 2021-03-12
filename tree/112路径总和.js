var hasPathSum = function (root, targetSum) {
  if (!root) return false
  let result = false

  const dfs = (root, value) => {
    if (!root.left && !root.right && value === targetSum) {
      result = true
    }

    console.log(value)
    if (root.left) dfs(root.left, value + root.left.val)
    if (root.right) dfs(root.right, value + root.right.val)
  }

  dfs(root, root.val)
  return result
};
