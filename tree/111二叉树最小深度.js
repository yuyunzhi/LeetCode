var minDepth = function(root) {
  if(!root) return 0
  let queue = [[root,1]]

  while(queue.length>0){

    const [n,l] = queue.shift()

    if(!n.left && !n.right){
      // 是叶子节点
      return l
    }


    if(n.left) {
      queue.push([n.left,l+1])
    }

    if(n.right) {
      queue.push([n.right,l+1])
    }

  }
};
