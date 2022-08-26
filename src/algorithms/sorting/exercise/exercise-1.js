import {
  defaultCompare,
  lessThan,
} from "../../../utils/comparator/comparator.js";
/**
 * 习题1-2
 * 插入排序,按非升序排序
 * @param {*} originalArray 需要排序的数组
 * @param {*} customComparator 自定义比较方法,默认为defaultCompare函数
 * @returns: {Array} 返回一个新的排序后的数组
 */
export function insertionSortNotUp(
  originalArray,
  customComparator = defaultCompare
) {
  const result = [...originalArray];
  for (let i = 1; i < result.length; i++) {
    let prevIndex = i - 1;
    const currentElement = result[i];
    while (prevIndex >= 0 && lessThan(result[prevIndex], currentElement)) {
      result[prevIndex + 1] = result[prevIndex];
      prevIndex--;
    }
    result[prevIndex + 1] = currentElement;
  }
  return result;
}

/**
 * 习题1-3
 * @param {*} array
 * @param {*} v
 * @returns
 */
export function linearSearch(array, v) {
  let result = null;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === v) {
      result = i;
    }
  }
  return result;
}

/**
 * 习题1-4
 * @param {*array} bin1
 * @param {*array} bin2
 * @returns {*array}
 */
export function addBinary(bin1, bin2) {
  const n = bin1.length > bin2.length ? bin1.length : bin2.length;
  const result = new Array(n + 1);
  let flag = false;
  for (let i = n - 1; i >= 0; i--) {
    const item1 = bin1[i] ? bin1[i] : 0;
    const item2 = bin2[i] ? bin2[i] : 0;
    const sum = flag ? item1 + item2 + 1 : item1 + item2;
    // 满二进一
    if (sum === 2) {
      result[i + 1] = 0;
      flag = true;
    } else if (sum === 3) {
      result[i + 1] = 1;
      flag = true;
    } else {
      result[i + 1] = sum;
      flag = false;
    }
  }
  if (flag) {
    result[0] = 1;
  }
  return result;
}
