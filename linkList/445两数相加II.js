var addTwoNumbers = function(l1, l2) {
  let link1 = reverse(l1);
  let link2 = reverse(l2);
  let p = link1;
  let q = link2;
  // 进一标志
  let mark = 0;
  let res = new ListNode();
  let cur = res;
  while (p || q || mark === 1) {
    let val = (p ? p.val : 0) + (q ? q.val : 0) + mark;
    mark = val / 10 | 0;
    cur.next = new ListNode(val % 10);
    cur = cur.next;
    if (p) p = p.next;
    if (q) q = q.next;
  }
  // 将结果再次翻转
  return reverse(res.next);

  // 翻转单链表
  function reverse(l) {
    // 迭代
    let cur = l;
    let pre = null;

    while (cur) {
      let temp = cur.next;
      cur.next = pre;
      pre = cur;
      cur = temp;
    }
    return pre;
  }
};


var addTwoNumbers = function(l1, l2) {
  let stack1 = [];
  let stack2 = [];
  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }
  let mark = 0;
  let res = null;
  while (stack1.length > 0 || stack2.length > 0 || mark !== 0) {
    let val1 = stack1.length > 0 ? stack1.pop() : 0;
    let val2 = stack2.length > 0 ? stack2.pop() : 0;
    let val = val1 + val2 + mark;
    mark = val / 10 | 0;
    curNode = new ListNode(val % 10);
    curNode.next = res;
    res = curNode;
  }
  return res;
};


