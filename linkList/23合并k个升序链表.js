var mergeKLists = function(lists) {
  if(lists.length===0) return []
  if(lists.length === 1) return lists[0]
  if(lists.length === 2) return mergeTwoLists(...lists)
  let curlist= mergeTwoLists(lists[0],lists[1])
  for(let i = 2; i<lists.length;i++){
    curlist = mergeTwoLists(curlist,lists[i])
    console.log('curlist',curlist)
  }

  return curlist
};



var mergeTwoLists = function(l1, l2) {
  const res = new ListNode(0)
  let p = res
  let p1 = l1
  let p2 = l2
  while(p1 && p2){
    if(p1.val<p2.val){
      p.next = p1
      p1 = p1.next
    }else {
      p.next = p2
      p2 = p2.next
    }
    p = p.next
  }

  if(p1){
    p.next = p1
  }

  if(p2){
    p.next = p2
  }

  return res.next
};
