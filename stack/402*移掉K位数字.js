var removeKdigits = function(num, k) {
  if (num.length <= k) return '0'
  let list = num.split('')
  let j = 0
  while (k--) {
    while ( list[j] <= list[j + 1] ) j++
    list.splice(j, 1)
    j = j > 0 ? j - 1 : 0    // 从上次结束的地方开始, 就不用从头走一次了
  }
  let t = 0
  while ( list[t] === '0' ) t++
  return list.slice(t).join('') || '0'
};

// console.log(removeKdigits(num = "1432219", k = 3))
// console.log(removeKdigits(num = "10200", k = 1))
// console.log(removeKdigits(num = "10", k = 1))
// console.log(removeKdigits(num = "112", k = 1))
// console.log(removeKdigits(num = "5337", k = 2))
console.log(removeKdigits(num = "111111", k = 3))
