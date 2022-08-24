import {
  biggerThan,
  defaultCompare,
} from "../../utils/comparator/comparator.js";
/**
 * 插入排序
 * @param {*} originalArray 需要排序的数组
 * @param {*} customComparator 自定义比较方法,默认为defaultCompare函数
 * @returns: {Array} 返回一个新的排序后的数组
 */
export function insertionSort(
  originalArray,
  customComparator = defaultCompare
) {
  const result = [...originalArray];
  for (let i = 0; i < result.length; i++) {
    let prevIndex = i - 1;
    // 当前需要排序的元素
    const currentElement = result[i];
    // 判断前一个元素是否大于当前元素，如果是则当前一个元素往后移
    // 直到不存在当前元素或者前一个元素小于当前元素，停止移动
    while (prevIndex >= 0 && biggerThan(result[prevIndex], currentElement)) {
      result[prevIndex + 1] = result[prevIndex];
      prevIndex--;
    }
    // 将当前元素插入到移动后的位置
    result[prevIndex + 1] = currentElement;
  }
  return result;
}
