/**
 * 选择排序
 * @param {*Array} arr
 */
export function selectSort(arr) {
  const result = [...arr];
  const n = result.length;
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (result[j] < result[min]) {
        min = j;
      }
    }
    const temp = result[i];
    result[i] = result[min];
    result[min] = temp;
  }
  return result;
}
