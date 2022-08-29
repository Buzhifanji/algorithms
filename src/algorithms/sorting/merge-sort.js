/**
 * 合并两个有序数组(目前只考虑升序)
 * @param {*Array} leftArr
 * @param {*Array} rightArr
 */
function merge(leftArr, rightArr) {
  const result = [];
  // 利用双指针
  let left = 0,
    right = 0;
  const leftLen = leftArr.length,
    rightLen = rightArr.length;
  while (left < leftLen || right < rightLen) {
    if (left === leftLen) {
      result.push(rightArr[right]);
      right++;
    } else if (right === rightLen) {
      result.push(leftArr[left]);
      left++;
    } else if (leftArr[left] > rightArr[right]) {
      result.push(rightArr[right]);
      right++;
    } else {
      result.push(leftArr[left]);
      left++;
    }
  }
  return result;
}

/**
 * 归并排序
 * @param {*Array} arr
 */
export function mergeSort(arr) {
  const n = arr.length;
  if (n < 2) {
    return arr;
  }
  const middle = Math.floor(n / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}
