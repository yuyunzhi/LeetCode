const xx = (nums)=>{

  let result = []

  const backtrack = (path,l,start)=>{
      // 最终结果判断和采集
      if(path.length === nums.length){
        // path.length === l
        result.push(path)
        return
      }

      nums.forEach(n=>{
        // 不符合条件的过滤
         if(path.includes(n)) return

          backtrack(path.concat(n),l,start)
      })


  }

  backtrack([])

}
