/*由于只包含字符的字符串'('，')'，'{'，'}'，'['和']'，确定输入字符串是有效的。

如果输入字符串有效：

必须使用相同类型的括号关闭左括号。
必须以正确的顺序关闭打开括号。
请注意，空字符串也被视为有效。

例1：
输入： “（）”
 输出： true

例2：
输入： “（）[] {}”
 输出： true

例3：
输入： “（]”
 输出： false

例4：
输入： “（[]]”
 输出： false

例5：
输入： “{[]}”
 输出： true
*/




// 空间复杂度为 n  64 ms	35.4 MB

let isValid = function(s) {
    let arr= []
    let map = {
        ")": "(", 
         "]":"[", 
        "}":"{" 
    }
    for(var i = 0; i < s.length; i++){
        if(s[i] == '(' || s[i] == '{' || s[i] == '['){
            arr.push(s[i]);
        } else if(arr[arr.length-1] === map[s[i]]) {
            arr.pop();
        } else{
            return false;
        }
    }
    return arr.length == 0;
};