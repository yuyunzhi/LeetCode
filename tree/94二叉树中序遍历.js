const bt = require('./bt');
// const x = (root)=>{
//   if(!root) return
//   x(root.left)
//   console.log(root.val)
//   x(root.right)
// }

const inorderTraversal = (root) =>{
  const result = []

  const x =(root)=>{
    if(!root) return

    let q = root
    const stack = []

    while(stack.length || q){
      while(q){
        stack.push(q)
        q = q.left
      }

      const n = stack.pop()
      result.push(n.val)
      q = n.right
    }
  }

  x(root)

  return result
}

console.log(inorderTraversal(bt));
