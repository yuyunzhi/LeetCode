var detectCycle = function(head) {
  if (head === null) {
    return null;
  }
  let slow = head, fast = head;
  while (fast) {
    slow = slow.next;
    if (fast.next !== null) {
      fast = fast.next.next;
    } else {
      return null;
    }

    if (fast === slow) {
      let ptr = head;
      while (ptr !== slow) {
        ptr = ptr.next;
        slow = slow.next;
      }
      console.log(ptr)
      return ptr;
    }
  }
  return null;
};
