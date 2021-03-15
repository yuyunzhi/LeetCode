var buildTree = function(inorder, postorder) {
  const helper = (p_start,p_end,i_start,i_end) =>{
    if(p_start > p_end) return null
    let rootValue = postorder[p_end]
    let root = new TreeNode(rootValue)
    let mid = inorder.indexOf(rootValue)
    let leftNumber = i_end - mid
    root.left = helper(p_start,p_end-leftNumber-1,i_start,mid-1)
    root.right = helper(p_end-leftNumber,p_end-1,mid+1,i_end)
    return root

  }

  return helper(0,postorder.length-1,0,inorder.length-1)
};
