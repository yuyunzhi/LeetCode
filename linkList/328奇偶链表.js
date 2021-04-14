var oddEvenList = function(head) {
  if (head === null) {
    return head;
  }
  let evenHead = head.next;
  let odd = head, even = evenHead;
  while (even !== null && even.next !== null) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
};
