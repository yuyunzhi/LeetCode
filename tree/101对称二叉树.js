var isSymmetric = function(root) {

  if(!root) return false

  let result = true

  let q = [root]
  let array = []
  while(q.length>0){
    let len = q.length
    array.push([])
    while(len--){
      const n = q.shift()
      if(n){
        array[array.length-1].push(n.val)
        q.push(n.left || null)
        q.push(n.right || null)
      }else{
        array[array.length-1].push('x')
      }
    }
    const x = array[array.length-1].join("")
    const y = [...array[array.length-1]].reverse().join("")
    if(JSON.stringify(x) !== JSON.stringify(y)){
      result = false
      break
    }
  }
  return result
};
