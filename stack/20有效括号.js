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
let isValid = function (s) {
  const table = {
    left: "([{",
    right: ")]}"
  }

  if (s.length % 2 === 1) return false

  const stack = []
  const length = s.length

  for (let i = 0; i < length; i++) {
    if (table.left.indexOf(s[i]) >= 0) {
      stack.push(s[i])
    } else {
      const left = stack[stack.length - 1]
      const right = table.left[table.right.indexOf(s[i])]
      if (right === left) {
        stack.pop()
      } else {
        stack.push(s[i])
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
