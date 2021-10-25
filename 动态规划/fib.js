// f(n) = f(n-1) + f(n-2)
// 动态规划版本
function fib(n){
  if(n === 0) return 0
  if(n === 1) return 1
  let a = 0
  let b = 1
  while(n>1){
    [a,b] = [b,a+b]
    n--
  }

  return b
}
