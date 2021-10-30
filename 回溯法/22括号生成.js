
var isValid = (s)=>{

  const stack = []
  const length = s.length

  for (let i = 0; i < length; i++) {
    if ("(" === s[i]) {
      stack.push(s[i])
    } else {
      const left = stack[stack.length - 1]
      const right = "("
      if (right === left) {
        stack.pop()
      } else {
        stack.push(s[i])
        break
      }
    }
  }
  return stack.length === 0
}


var generateParenthesis = function(n) {
  let result = []
  const backtrack = (path)=>{
    if(path.length === n*2){
      console.log('path',path);
      if(isValid(path)){
        result.push(path)
      }
      return
    }
    [ '(' ,')'].forEach(i=>{
      backtrack(path+i)
    })

  }

  backtrack('')
  return result
};
console.log(generateParenthesis(3))
