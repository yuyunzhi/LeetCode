/*
给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。

示例 1:

输入: 1->2->3->3->4->4->5
输出: 1->2->5
示例 2:

输入: 1->1->1->2->3
输出: 2->3

链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {

  let dummy = new ListNode('x')
  dummy.next = head
  let prev = dummy
  let cur = head
  let preValue = null

  while(cur){
    if(preValue === cur.val){
      if(cur.next){
        preValue = cur.val
        prev.next = cur.next
        cur = cur.next
      }else{
        prev.next = null
        cur = null
      }
      continue
    }

    if(!cur.next) break

    if(cur.val === cur.next.val){
      preValue = cur.val
      prev.next = cur.next.next
      cur = cur.next.next
    }else{
      preValue = null
      prev = prev.next
      cur = cur.next
    }
  }

  return dummy.next
};


var deleteDuplicates = function(head) {
  var dumyNode = new ListNode(0);
  dumyNode.next = head;

  if(head == null) return null;
  var cur = head,pre = dumyNode;

  while(cur != null && cur.next != null){
    if(cur.val == cur.next.val){ //说明有重复
      //则循环移动cur 到最后一个重复结点
      while(cur.next != null && cur.val == cur.next.val){
        cur = cur.next;
      }
      pre.next = cur.next;
      cur = cur.next;
    }else { //直接后移 pre 和 cur
      pre = cur;
      cur = cur.next;
    }
  }
  return dumyNode.next; //最后为什么不返回head呢？因为删除的有可能是首结点

};
