// 大小为K的堆中插入元素的时间复杂度为O(logk)
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
    if (this.heap[parentIndex] > this.heap[index]) {
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
    if(this.heap[leftIndex] < this.heap[index]){
        this.swap(leftIndex,index)
        this.shiftDown(leftIndex)
    }
    if(this.heap[rightIndex] < this.heap[index]){
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



const h = new MinHeap()
h.insert(2)
h.insert(4)
h.insert(6)
// h.insert(3)
// h.insert(2)
// h.insert(1)
// h.pop()
// h.size()
// h.peek()
console.log(h.getHeap());

// export default MinHeap
