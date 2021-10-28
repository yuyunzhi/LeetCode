var zigzagLevelOrder = function(root) {
  if(!root) return []
  let queue = [[root,1]]
  console.log('root',root)
  // 135 顺， 246逆序
  let result = []
  while(queue.length>0){

    let len = queue.length
    let layer = []
    while(len > 0){
      console.log(queue)
      const [n,l] = queue.shift()
      console.log('n',n)
      if(l % 2 === 0){
        layer.unshift(n.val)
      }else{
        layer.push(n.val)
      }


      if(n.left) {
        queue.push([n.left,l+1])
      }

      if(n.right) {
        queue.push([n.right,l+1])
      }

      len--
    }
    result.push(layer)
  }

  return result
};
