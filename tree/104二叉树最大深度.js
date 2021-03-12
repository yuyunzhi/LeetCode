
const maxDeep = (root)=>{
  let maxL = 0

  const dfs = (n,l)=>{
      if(!n) return
    if(!n.right && !n.left) {
      maxL = Math.max(maxL,l)
    }
      dfs(n.left,l+1)
      dfs(n.right,l+1)
  }

  dfs(root,1)

  return maxL
}
