// 冒泡排序
Array.prototype.bubbleSort = function () {
  let array = Array.from(this)
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1]
        array[j + 1] = array[j]
        array[j] = temp
      }
    }
  }
  return array
}

// 选择排序
Array.prototype.selectionSort = function () {
  let array = Array.from(this)
  for (let i = 0; i < array.length-1; i++) {
    let min = i
    for (let j = i; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j
      }
    }
    [array[min], array[i]] = [array[i], array[min]]

  }

  return array
}

// 插入排序
Array.prototype.insertionSort = function () {
  let array = Array.from(this)
  for(let i = 1;i<array.length;i++){
    let min = array[i]
    let j = i - 1
    while(j>= 0){
      if(array[j]>min){
        [array[j],array[j+1]] = [array[j+1],array[j]]
      }
      j--
    }
  }
  return array
}

// 快排
Array.prototype.quickSort= function (){
  let array = Array.from(this)


  const x = (arr)=>{
    if(arr.length === 1) return arr
    let split = arr[0]
    let left = []
    let right = []
    for(let i =0;i<arr.length;i++){
      if(arr[i] >= split){
        right.push(arr[i])
      }else{
        left.push(arr[i])
      }
    }
    left = x(left)
    right = x(right)
    return [...left,...right]
  }

  return x(array)

}
const arr = [5, 4, 3, 2, 1]
console.log(arr.quickSort());
