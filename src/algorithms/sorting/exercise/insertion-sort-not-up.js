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
