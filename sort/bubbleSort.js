Array.prototype.bubbleSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - 1 - i; j++) {
      if (this[j] > this[j + 1]) {
        [this[j], this[j + 1]] = [this[j + 1], this[j]]
      }
    }
  }
  return this
}

const arr = [5, 4, 3, 2, 1]
console.log(arr.bubbleSort());

// 时间复杂度 O(n^2)
// 空间复杂度 O(1)
// 稳定
