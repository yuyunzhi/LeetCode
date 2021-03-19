class MinHeap {
  constructor() {
    this.heap =  []
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
    if (this.heap[parentIndex] && this.heap[parentIndex].val > this.heap[index].val) {
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
    if(this.heap[leftIndex] && this.heap[leftIndex].val < this.heap[index].val){
      this.swap(leftIndex,index)
      this.shiftDown(leftIndex)
    }
    if(this.heap[rightIndex] && this.heap[rightIndex].val < this.heap[index].val){
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
    if(this.heap.length === 1) return this.heap.shift()
    const top = this.heap[0]
    // 这么做是不为了破坏堆结构，然后对对顶的元素进行下移
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
    return top
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
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (!lists.length) return null
  if (lists.length === 1) return lists[0]
  let link = new ListNode(0)
  let p = link
  let h = new MinHeap()

  lists.forEach(l=>{
    l && h.insert(l)
  })

  while(h.size()){
    const n = h.pop()
    p.next = n
    p = p.next
    if(n.next) h.insert(n.next)
  }
  return link.next
};
