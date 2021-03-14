
const find = (value,root)=>{
  let node = root
  while(node !== null){
    if(node.data == vale){
      return true
    }else if(node.data > value){
      node = node.leftNode
    }else{
      node = node.rightNode
    }
  }
  return false
}
