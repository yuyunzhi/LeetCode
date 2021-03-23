Array.prototype.selectionSort = function () {

  for (let i = 0; i < this.length - 1; i++) {
    let indexMin = i
    for (let j = i; j < this.length ; j++) {
      if (this[j] < this[indexMin]) {
        indexMin = j
      }
    }
    [this[indexMin], this[i]] = [this[i], this[indexMin]]
  }
  return this
}

const arr = [5, 4, 3, 2, 1]
console.log(arr.selectionSort());
