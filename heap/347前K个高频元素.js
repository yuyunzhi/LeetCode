class MinHeap {
  constructor() {
    this.heap =  []
  }

  getHeap() {
    return this.heap
  }

  swap(i1, i2) {
    const temp = this.heap[i1]
    this.heap[i1] = this.heap[i2]
    this.heap[i2] = temp
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2)
  }

  shiftUp(index) {
    if (index === 0) return
    const parentIndex = this.getParentIndex(index)
    if (this.heap[index] && this.heap[parentIndex].value > this.heap[index].value) {
      // 交换
      this.swap(parentIndex, index)
      this.shiftUp(parentIndex)
    }
  }

  getLeftChildIndex(i) {
    return i * 2 + 1
  }

  getRightChildIndex(i) {
    return i * 2 + 2
  }

  shiftDown(index) {
    const leftIndex = this.getLeftChildIndex(index)
    const rightIndex = this.getRightChildIndex(index)
    if(this.heap[leftIndex] && this.heap[leftIndex].value < this.heap[index].value){
      this.swap(leftIndex,index)
      this.shiftDown(leftIndex)
    }
    if(this.heap[rightIndex] && this.heap[rightIndex].value < this.heap[index].value){
      this.swap(rightIndex,index)
      this.shiftDown(rightIndex)
    }
  }

  /**
   * 插入堆并进行排序
   * @param value
   */
  insert(value) {
    this.heap.push(value)
    this.shiftUp(this.heap.length - 1)
  }
  /*
    弹出堆顶
   */
  pop() {
    // 这么做是不为了破坏堆结构，然后对对顶的元素进行下移
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
  }
  /*
    获取堆顶
   */
  peek(){
    return this.heap[0]
  }
  /*
    获取堆的长度
   */
  size(){
    return this.heap.length
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

  const map = new Map()
  nums.forEach(n=>{
    map.set(n,map.has(n)? map.get(n) + 1 : 1)
  })

  console.log(map)
  const h = new MinHeap()
  map.forEach((value,key)=>{
    console.log(value,key)
    h.insert({value,key})
    if(h.size()>k){
      h.pop()
    }
  })

  return h.heap.map(i=>i.key)
}


console.log(topKFrequent(nums = [1,1,2,2,2,2,2,3,3,4,4,4,4,4,4,], k = 2));

