Array.prototype.selectionSort = function () {

  for (let i = 1; i < this.length; i++) {
    let min = this[i]
    let j = i
    while (j > 0) {
      if (this[j - 1] > min) {
        this[j] = this[j - 1]
      }else{
        break
      }
      j--
    }
    this[j] = min
  }
  return this
}

const arr = [5, 4, 3, 2, 1]
console.log(arr.selectionSort());
// 时间复杂度 O(n^2)
