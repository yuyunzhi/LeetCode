// f(n) = f(n-1) + f(n-2)

var climbStairs = function(n) {

  if(n === 1) return 1
  if(n === 2) return 2
  let a = 1
  let b = 2
  while(n>2){
    [a,b] = [b,a+b]
    n--
  }

  return b
};
