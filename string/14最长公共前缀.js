/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。

 如果不存在公共前缀，返回空字符串 ""。

  

 示例 1：

 输入：strs = ["flower","flow","flight"]
 输出："fl"


 链接：https://leetcode-cn.com/problems/longest-common-prefix
 * @param strs
 * @returns {string|*}
 */

var longestCommonPrefix = function(strs) {
  if(strs.length === 1) return strs[0]
  if(strs.length === 0) return ""

  let minLen = strs[0] ? strs[0].length : 0

  strs.forEach(item=>{
    if(item.length <  minLen) {
      minLen = item.length
    }
  })

  if(minLen === 0) return ""

  let result = ""
  for(let i = 0 ; i< minLen ;i++){
    let commonStr = strs[0].slice(0,i+1)

    let isCommon = strs.every(item=>{
      return commonStr === item.slice(0,i+1)
    })

    if(!isCommon){
      break
    }
    result = commonStr
  }

  return result
};
