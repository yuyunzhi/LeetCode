
/*
给定32位有符号整数，整数的反向数字。
例1：
输入： 123
 输出： 321

例2：
输入： -123
 输出： -321

例3：
输入： 120
 输出： 21

注意：
假设我们正在处理的环境中，其只能在32位带符号整数的范围内存储的整数：[-2 31 2 31  - 1]
出于此问题的目的，假设当反向整数溢出时，函数返回0。
*/


//第一次做  	132 ms	37.7 MB       
let reverse1 = function(x) {
    let newNum
    let newArr=[]
    let arr=x.toString().split("")
    let index
    let isPositive =true
    if(arr[0]==="-"){
        arr.shift()
        isPositive=false
    }
    newArr=arr.reverse()
    for(let j=0;j<newArr.length;j++){
        //除0
        if(newArr[j]===0&&newArr[j+1]&&newArr[j+1]===0){
                index=j+1
        }
    }
    newArr.splice(0,index)
    num=newArr.join("")-0
    if(isPositive){
        //正数
        newNum= num>(Math.pow(2,31)-1)?0:num
    }else{
         //负数
        newNum=num>Math.pow(2,31)?0:`-${num}`
    }

    return newNum
};


//改进 84 ms	35.9 MB

let reverse2 = function(x) {
    let handleNum = parseInt((Math.abs(x)).toString().split('').reverse().join(''));
    if(x == 0 || handleNum > Math.pow(2,31)-1 || handleNum< -Math.pow(2,31)){
        return 0; 
    }else if(x > 0){
        return handleNum
    }else{
        return -handleNum
    }

};  