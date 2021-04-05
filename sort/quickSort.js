Array.prototype.quickSort = function (){
  const rec = (arr)=>{
    if(arr.length === 1) return arr
    const left = []
    const right = []
    const mid = arr[0]
    for(let i = 1;i<arr.length ;i++){
      if(arr[i]< mid){
        left.push(arr[i])
      }else{
        right.push(arr[i])
      }
    }
    const leftArr = rec(left)
    const rightArr = rec(right)

    return [...leftArr,mid,...rightArr]
  }

  const res =  rec(this)
  res.forEach((i,index)=>{
    this[index] = i
  })

  return res
}


const arr = [2,4,5,3,1]
console.log(arr.quickSort());

// O(logn)
