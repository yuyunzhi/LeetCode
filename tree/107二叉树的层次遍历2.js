/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {

  if(!root) return []
  let result = []
  let q = [root]

  while(q.length){
    let len = q.length
    result.push([])
    while(len--){
      const n = q.shift()
      result[result.length-1].push(n.val)
      if(n.left) q.push(n.left)
      if(n.right) q.push(n.right)
    }
  }

  return result.reverse()
};
