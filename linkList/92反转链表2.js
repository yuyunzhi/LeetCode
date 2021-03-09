/**
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

 说明:
 1 ≤ m ≤ n ≤ 链表长度。
 */

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {

  let dummy = new ListNode(-1)
  dummy.next = head
  let pre = dummy

  for(let i = 0 ; i < left -1;i++){
    pre = pre.next
  }

  let rightNode = dummy
  for(let i = 0 ; i < right;i++){
    rightNode = rightNode.next
  }

  leftNode = pre.next
  last = rightNode.next

  pre.next = null
  rightNode.next =null

  rightNode = reverseList(leftNode)

  pre.next = rightNode
  leftNode.next = last

  return dummy.next

};


var reverseList = function(head) {
  console.log('head --- ',head)
  let p1 = head
  let p2 = null
  while(p1){
    const tmp = p1.next
    p1.next = p2
    p2 = p1
    p1 = tmp
  }
  console.log('head +++ ',head)
  return p2
};
