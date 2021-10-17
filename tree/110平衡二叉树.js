var isBalanced = function(root) {
  let result = true
  const dfs = (root) => {

    if(!root) return 0

    let left = dfs(root.left)
    let right = dfs(root.right)

    if(Math.abs(left-right)>1){
      result = false
    }
    return Math.max(left,right) + 1
  }

  dfs(root)

  return result
};






