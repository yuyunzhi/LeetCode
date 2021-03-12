// 后序遍历

const x = (root)=>{
  if(!root) return
  x(root.left)
  x(root.right)
  console.log(root.val)
}

const postorderTraversal = (root)=>{
  const reuslt = []

  const x = (root)=>{

    if(!root) return
    const stack = [root]
    const outputStack = []
    while(stack.length){
      const n = stack.pop()
      outputStack.push(n)
      if(n.left) stack.push(n.left)
      if(n.right) stack.push(n.right)
    }

    while(outputStack.length){
      const n = outputStack.pop()
      reuslt.push(n.val)
    }

  }

  x(root)

  return reuslt
}
