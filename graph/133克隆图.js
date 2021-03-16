// 深度优先算法
var cloneGraph = function(node) {
  console.log('---node',node)
  if(!node) return
  let visited = new Map()
  const dfs = (n)=>{
    console.log(n.val)
    const copyN = new Node(n.val)
    visited.set(n,copyN)
    n.neighbors.forEach(ne=>{
      if(!visited.has(ne)){
        dfs(ne)
      }
      copyN.neighbors.push(visited.get(ne))
    })
  }

  dfs(node)
  return visited.get(node)
};

// 广度优先算法
var cloneGraph = function(node) {
  if(!node) return
  let visited = new Map()
  const copyN = new Node(node.val)
  visited.set(node,copyN)
  let q = [node]

  while(q.length>0){
    const n = q.shift()
    n.neighbors.forEach(ne=>{
      if(!visited.has(ne)){
        const copyN = new Node(ne.val)
        visited.set(ne,copyN)
        q.push(ne)
      }
      visited.get(n).neighbors.push(visited.get(ne))
    })
  }

  return visited.get(node)
};
