var isValid = (path,s) => {
  let arr = path.split('.')
  return  path.length === (s.length+3) && arr.length === 4
}


var restoreIpAddresses = function (s) {
  if(s.length < 4 || s.length > 12) return []

  let result = []
  const backtrack = (path, start) => {

    if (isValid(path,s)) {
      result.push(path)
      return
    }

    for (let i = start; i < s.length; i++) {
      let arr = path.split('.')
      let last = arr[arr.length - 1]

      if(last === '0'){
        backtrack(path + '.' + s[i], i + 1)
        break
      }

      // 如果添加的最后一个数 大于 255 就不操作
      if(Number(last + s[i]) <= 255){
        backtrack(path + s[i], i + 1)
      }

      if(path[path.length - 1] !== '.'){
        backtrack(path + '.' + s[i], i + 1)
      }
    }
  }
  backtrack(s[0], 1)
  return result
};
console.log(restoreIpAddresses("010010"))
