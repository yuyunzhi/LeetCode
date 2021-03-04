/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 有效字符串需满足：
 左括号必须用相同类型的右括号闭合。
 左括号必须以正确的顺序闭合。
 链接：https://leetcode-cn.com/problems/valid-parentheses
 */


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []
  const stringArray = s.split("")
  const length = stringArray.length
  const table = {
    left: "([{",
    right: ")]}"
  }
  for(let i = 0;i<length;i++){
    if (table.left.indexOf(stringArray[i]) >= 0) {
      stack.push(stringArray[i])
    } else {
      const left = stack[stack.length - 1]
      // 右边映射左边
      const right = table.left[table.right.indexOf(stringArray[i])]
      if(right === left){ //匹配成功
        stack.pop()
      }else{
        // 说明不是有效的结果
        stack.push(x[i])
        break
      }
    }
  }
  return stack.length === 0
};

// console.log(isValid("(]"))  //false
// console.log(isValid("()")) //true
// console.log(isValid("()[]{}")) //true
// console.log(isValid("({{[{}]}})")) //true
console.log(isValid("]"))  //false
// console.log(isValid("[")) // false
