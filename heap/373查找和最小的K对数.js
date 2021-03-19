var kSmallestPairs = function (nums1, nums2, k) {
  const heap = []
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (heap.length < k) {
        heap.push([nums1[i], nums2[j]])
        shiftUp(heap, heap.length - 1)
      } else if ((nums1[i] + nums2[j]) <= sum(heap[0])) {
        heap[0] = [nums1[i], nums2[j]]
        shiftDown(heap, 0)
      }
    }
  }
  return heap.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]))
};

function shiftUp(heap, i) {
  const parent = (i - 1) / 2 | 0
  if (sum(heap[i]) > sum(heap[parent])) {
    swap(heap, i, parent)
    shiftUp(heap, parent)
  }
}

function shiftDown(heap, i) {
  let left = i * 2 + 1
  if (left >= heap.length) {
    return
  }
  if (left + 1 < heap.length && sum(heap[left]) < sum(heap[left + 1])) {
    left++
  }
  if (sum(heap[i]) <= sum(heap[left])) {
    swap(heap, i, left)
    shiftDown(heap, left)
  }
}

function sum(arr) {
  return arr[0] + arr[1]
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}
