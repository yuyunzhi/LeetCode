/*
给你一个由 '('、')' 和小写字母组成的字符串 s。

你需要从字符串中删除最少数目的 '(' 或者 ')' （可以删除任意位置的括号)，使得剩下的「括号字符串」有效。

请返回任意一个合法字符串。

有效「括号字符串」应当符合以下 任意一条 要求：

空字符串或只包含小写字母的字符串
可以被写作 AB（A 连接 B）的字符串，其中 A 和 B 都是有效「括号字符串」
可以被写作 (A) 的字符串，其中 A 是一个有效的「括号字符串」

链接：https://leetcode-cn.com/problems/minimum-remove-to-make-valid-parentheses
 */

var minRemoveToMakeValid = function (s) {

  const stack = []
  for (let i = 0; i < s.length; i++) {

    if ("()".indexOf(s[i])=== -1) continue
    const len = stack.length
    if (len - 1 >= 0 &&
        stack[len - 1].value === '(' &&
        s[i] === ')') {
      stack.pop()
    } else {
      stack.push({
        value: s[i],
        index: i
      })
    }
  }
  const strArr = s.split("")
  for(let i = stack.length - 1 ;i >= 0 ;i--){
    strArr.splice(stack[i].index,1)
  }

  return strArr.join("")
};


console.log(minRemoveToMakeValid(s = "lee(t(c)o)de)"))
console.log(minRemoveToMakeValid(s = "a)b(c)d"))
console.log(minRemoveToMakeValid(s = "(a(b(c)d)"))
console.log(minRemoveToMakeValid(s = "))(("))
