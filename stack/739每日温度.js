var dailyTemperatures = function(T) {

  const stack = []
  const result = []
  for(let i = 0 ;i < T.length ;i++){
    result[i] = 0

    while(stack.length > 0 && stack[stack.length - 1].value < T[i]){
      result[stack[stack.length - 1].index] = i - stack[stack.length - 1].index
      stack.pop()

    }

    stack.push({
      value:T[i],
      index:i
    })
  }

  return result
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
