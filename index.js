/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  if(s.length === 0) return ""
  let hasMap = new Map()
  s.split("").forEach(w=>{
    hasMap.set(w,hasMap.has(w)? hasMap.get(w) + 1 : 1)
  })

  let array = Array.from(hasMap).sort((a,b)=>a[1]-b[1])
  let result =""
  for(let i = array.length -1 ;i>= 0;i--){
    const [key ,value ] = array[i]
    if(value === 1) {
      result = result + key
    }else{
      for(let j = 1 ; j<= value ; j++){
        result = result + key
      }
    }
  }
  return result
};

console.log(frequencySort("raaeaedere"));
