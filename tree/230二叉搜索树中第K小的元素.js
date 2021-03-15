/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  if(!root) return undefined
  console.log(root)
  const q = [root]
  let result = []
  while(q.length>0){
    const n = q.shift()
    result.push(n.val)
    if(n.left) q.push(n.left)
    if(n.right) q.push(n.right)
  }

  result.sort((a,b)=>a-b)

  return result[k-1]
};
