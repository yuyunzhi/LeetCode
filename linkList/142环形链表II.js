var detectCycle = (head)=>{
  let fast = head,slow=head
  while(fast && fast.next){
    slow = slow.next
    fast = fast.next.next

    if(slow === fast){
      let pr = head

      while(pr !== slow){
        pr = pr.next
        slow = slow.next
      }

      return pr
    }
  }

  return null
}
