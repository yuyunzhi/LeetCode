var getIntersectionNode = function(headA, headB) {

  if(headA === headB) return headA

  let headAArr = []
  let headBArr = []
  let pa = headA
  let pb = headB

  while(pa){
    headAArr.push(pa)
    pa = pa.next
  }

  while(pb){
    headBArr.push(pb)
    pb = pb.next
  }

  headAArr.reverse()
  headBArr.reverse()

  let min = headAArr.length > headBArr.length ? headAArr.length : headBArr.length
  let same = null
  for(let i = 0 ; i< min ;i++){
    if(headAArr[i] !== headBArr[i]){
      same = headAArr[i-1]
      break
    }
  }
  return same
};


// 高效的方法

var getIntersectionNode = function(headA, headB) {
  let a = headA,
      b = headB;
  while (a != b) {
    // a 走一步，如果走到 headA 链表末尾，转到 headB 链表
    a = a != null ? a.next : headB;
    // b 走一步，如果走到 headB 链表末尾，转到 headA 链表
    b = b != null ? b.next : headA;
  }
  return a;
};
