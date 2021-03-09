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
var removeNthFromEnd = function (head, n) {
  let len = 1, cur = head
  while (cur && cur.next) {
    len++
    cur = cur.next
  }

  if (len === n && len === 1) return null

  let index = len - n  //   index = 3  n=2 ,   index = 4  n=1

  let p = head, len2 = 1
  while (p && p.next) {
    if (len2 === 1 && index === 0) {
      // 说明在头部
      return p.next
    } else if (len2 === (len - 1) && index === (len - 1)) {
      // 说明在尾部 前一个，可以删尾部了
      p.next = null
      return head
    } else {
      if (len2 === index) {
        p.next = p.next.next
        return head
      }

    }
    p = p.next
    len2++
  }
};

// 快慢指针
var removeNthFromEnd = function(head, n) {

  if( !head.next && n === 1) return null

  let fast = head , slow = head

  while(n>0){
    if(!fast.next) break
    fast = fast.next
    n--
  }

  if(n>0){
    // 说明删掉的是第一个
    return head.next
  }

  while(fast && fast.next){
    fast = fast.next
    slow = slow.next
  }

  slow.next = slow.next.next

  return head

};
