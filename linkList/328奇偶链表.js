var oddEvenList = function(head) {
  if (head === null) {
    return head;
  }
  let evenHead = head.next;
  let odd = head, even = evenHead;

  while (even  && even.next ) {
    const temp = even.next
    even.next = temp.next
    odd.next =  temp

    odd = odd.next
    even = even.next
  }
  odd.next = evenHead;
  return head;
};
