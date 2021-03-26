Array.prototype.mergeSort = function (){
    const rec = (arr)=>{
      if(arr.length === 1) return arr
      const mid = Math.floor(arr.length/2)
      const left = arr.slice(0,mid)
      const right = arr.slice(mid,arr.length)
      const orderLeft = rec(left)
      const orderRight = rec(right)
      const res = []
      while(orderLeft.length || orderRight.length){
        if(orderLeft.length && orderRight.length){
          res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
        }
      }
  }

  rec(this)
}


const arr = [5, 4, 3, 2, 1]
console.log(arr.mergeSort());
