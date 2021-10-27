/*
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let dummy = new ListNode(0)
  dummy.next = head
  let prev = dummy
  let cur = head
  while(cur && cur.next){
    const next = cur.next
    cur.next = next.next
    prev.next = next
    next.next = cur

    prev = cur
    cur = cur.next

  }

  return dummy.next

};

// 参考答案
// https://leetcode-cn.com/problems/swap-nodes-in-pairs/solution/shou-hua-tu-jie-24-liang-liang-jiao-huan-lian-biao/
