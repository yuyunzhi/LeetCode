/**
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 *
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if(!head.next ) return null

  let fast = head
  let slow = head

  while(n>0){
    if(!fast.next) break
    fast = fast.next
    n--
  }

  if(n>0){
    return head.next
  }

  while(fast.next){
    fast = fast.next
    slow = slow.next
  }

  slow.next = slow.next.next

  return head
};
