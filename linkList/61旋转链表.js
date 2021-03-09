/*
给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

输入: 1->2->3->4->5->NULL, k = 2
输出: 4->5->1->2->3->NULL
解释:
向右旋转 1 步: 5->1->2->3->4->NULL
向右旋转 2 步: 4->5->1->2->3->NULL

链接：https://leetcode-cn.com/problems/rotate-list

 */


var rotateRight = function (head,k) {
  if (head === null || head.next === null) {
    return head;
  }
  let cur = head, len = 0;
  // 1. 找到链表的长度，可以得出最终旋转的情况， k%len
  // ps: 当k===len时，链表相当于没有移动
  while (cur !== null) {
    len++;
    cur = cur.next;
  }

  let m = k % len;
  // k是0，或者是len的倍数时，链表旋转到原来的位置，可直接返回。
  if (m === 0) return head;
  // 设置快慢指针，将链表分成两段。
  let slow = head, fast = head;
  while (m > 0) {
    m--;
    fast = fast.next;
  }
  while (fast && fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  // 新的链表头节点，是第二段的第一个节点。
  let r = slow.next;
  slow.next = null; // 将第一段节点最后节点设置为null。
  fast.next = head; // 第二段最后节点指向第一段节点开始。
  return r;
};
