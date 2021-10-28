var countNodes = function(root) {
  if(!root) return 0
  let count = 0

  const dfs = (root)=>{
    count++
    if(root.left) dfs(root.left)
    if(root.right) dfs(root.right)
  }

  dfs(root)

  return count
};
