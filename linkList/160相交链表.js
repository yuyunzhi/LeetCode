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
