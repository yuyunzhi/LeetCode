var levelOrder = function(root) {
  let result = []
  if(!root) return []
  const q = [[root,0]]
  while(q.length>0){
    const [x,level] = q.shift()
    console.log(x,level)
    if(!result[level]){
      result.push([x.val])
    }else{
      result[level].push(x.val)
    }
    if(x.left) q.push([x.left,level+1])
    if(x.right) q.push([x.right,level+1])
  }

  return result

};


var levelOrder = function(root) {
  let result = []
  if(!root) return []
  const q = [root]
  while(q.length>0){
    let len = q.length
    result.push([])
    while(len--){
      const x = q.shift()
      result[result.length-1].push(x.val)
      if(x.left) q.push(x.left)
      if(x.right) q.push(x.right)
    }
  }
  return result
};
