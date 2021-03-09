/**
 * 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。

 你应当 保留 两个分区中每个节点的初始相对位置。

  

 链接：https://leetcode-cn.com/problems/partition-list

 输入：head = [1,4,3,2,5,2], x = 3
 输出：[1,2,2,4,3,5]


 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let cur = head
  let smallDummy = new ListNode('s')
  let sp = smallDummy
  let bigDummy = new ListNode('b')
  let bp = bigDummy

  while(cur){
    if(cur.val < x){
      // 放在左边
      sp.next = cur
      sp = sp.next
    }else{
      // 放在右边
      bp.next = cur
      bp = bp .next
    }
    cur = cur.next
  }

  bp.next = null
  sp.next = bigDummy.next

  return smallDummy.next
};
