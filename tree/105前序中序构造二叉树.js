const buildTree = (preorder,inorder)=>{

  const helper = (p_start,p_end,i_start,i_end) =>{
      if(p_start > p_end) return null
      let rootValue = preorder[p_start]
      let root = new TreeNode(rootValue)
      let mid = inorder.indexOf(rootValue)
      let leftNumber = mid - i_start
      root.left = helper(p_start+1,p_start + leftNumber,i_start,mid-1)
      root.right = helper(p_start + leftNumber+1,p_end,mid+1,i_end)
      return root

  }

  return helper(0,preorder.length-1,0,inorder.length-1)
}
