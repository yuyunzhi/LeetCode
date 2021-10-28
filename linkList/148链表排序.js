var insertListNode = (list,node)=>{
  if(!list.next) {
    list.next = node
    return list
  }

  let val = node.val
  let p = list
  while(p && p.next){

    // [-100000000,x]
    if(p.next.val - val >= 0){
      // 插入的位置就是这
      const temp = p.next
      p.next = node
      node.next = temp
      return list
    }else{
      p = p.next
    }
  }
  p.next = node
  return list
}
var sortList = function(head) {
  let resultListNode = new ListNode(-10000000000000000)
  let p = head
  while(p){
    const temp = p.next
    p.next = null
    console.log('start',resultListNode,p)
    resultListNode = insertListNode(resultListNode,p)
    console.log('end',resultListNode)
    p = temp
  }

  return resultListNode.next
};

// 高效的方法

var sortList = function(head) {
  //特判
  if(!head) return null;
  //全部切断
  let p  = head
  let s = [];
  while (p) {
    let t = p.next;
    p.next = null;
    s.push(p);
    p = t;
  }
  //排序
  s.sort((a, b) => (a.val - b.val));
  //重组
  for(let i = 0; i < s.length - 1; i ++) {
    s[i].next = s[i + 1];
  }
  return s[0];
}
