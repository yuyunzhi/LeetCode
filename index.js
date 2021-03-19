var canFinish = function(numCourses, prerequisites) {

  let neighbors = new Array(numCourses)
  prerequisites.forEach(([a,b])=>{
    neighbors[b] = neighbors[b] ? neighbors[b] : []
    neighbors[b].push(a)
  })

  console.log(neighbors)



  for(let i = 0 ; i<neighbors.length;i++){
      let visited = new Set()
      visited.add(i)
      let hasAround = false
      const dfs = (n)=>{
        (neighbors[n] || []).forEach(ne=>{
          if(!visited.has(ne)){
            visited.add(ne)
            dfs(ne)
          }else{
            hasAround = true
          }
        })
      }
      dfs(i)
      if(hasAround)continue

      if([...visited].length === numCourses ){
         return true
      }
  }



  return false
};

console.log(canFinish(numCourses = 2, prerequisites = [[1,0],[0,1]]));
