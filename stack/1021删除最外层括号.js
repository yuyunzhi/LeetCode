/**
 * 有效括号字符串为空 ("")、"(" + A + ")" 或 A + B，其中 A 和 B 都是有效的括号字符串，+ 代表字符串的连接。例如，""，"()"，"(())()" 和 "(()(()))" 都是有效的括号字符串。

 如果有效字符串 S 非空，且不存在将其拆分为 S = A+B 的方法，我们称其为原语（primitive），其中 A 和 B 都是非空有效括号字符串。

 给出一个非空有效字符串 S，考虑将其进行原语化分解，使得：S = P_1 + P_2 + ... + P_k，其中 P_i 是有效括号字符串原语。

 对 S 进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 S 。

 链接：https://leetcode-cn.com/problems/remove-outermost-parentheses
 */


/**
 * @param {string} s
 * @return {string}
 */
let removeOuterParentheses = function(s) {
  const table = {
    left: "([{",
    right: ")]}"
  }
  if (s.length % 2 === 1) return false

  let indexList = []
  const stack = []
  const length = s.length

  for (let i = 0; i < length; i++) {
    if (table.left.indexOf(s[i]) >= 0) {
      stack.push(s[i])
    } else {
      const left = stack[stack.length - 1]
      // 右边映射左边
      const right = table.left[table.right.indexOf(s[i])]
      if (right === left) { //匹配成功
        stack.pop()
        stack.length === 0  && indexList.push(i+1)
      } else {
        // 说明不是有效的结果
        stack.push(s[i])
        break
      }
    }
  }
  let result = ""
  for(let i = 0 ; i<indexList.length;i++){
    if(i === 0){
      const item = s.slice(1,indexList[i]-1)
      result = result + item
    }else{
      const item =  s.slice(indexList[i-1]+1,indexList[i]-1)
      result = result + item
    }
  }
  return result
};



console.log(removeOuterParentheses("(()())(())(()(()))"))

console.log(removeOuterParentheses("(()())(())"))
