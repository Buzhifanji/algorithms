/**
 * 两个数对比结果的状态
 */
export const Compare = {
  LESS_THAN: -1, // 小于
  BIGGER_THAN: 1, // 大于
  EQUALS: 0, // 等于
};

/**
 * 默认对比方法
 * @param {*} a
 * @param {*} b
 * @returns Compare
 */
export function defaultCompare(a, b) {
  if (a === b) return Compare.EQUALS;
  return a > b ? Compare.BIGGER_THAN : Compare.LESS_THAN;
}

/**
 * 大于等于
 * @param {*} a
 * @param {*} b
 * @param {*} compareFn，默认为defaultCompare函数
 * @returns Boolean
 */
export function biggerEquals(a, b, compareFn = defaultCompare) {
  const result = compareFn(a, b);
  return result === Compare.BIGGER_THAN || result === Compare.EQUALS;
}

/**
 * 等于
 * @param {*} a
 * @param {*} b
 * @returns Boolean
 */
export function defaultEquals(a, b, compareFn = defaultCompare) {
  const result = compareFn(a, b);
  return result === Compare.EQUALS;
}

/**
 * 小于等于
 * @param {*} a
 * @param {*} b
 * @param {*} compareFn ，默认为defaultCompare函数
 * @returns Boolean
 */
export function lesserEquals(a, b, compareFn = defaultCompare) {
  const result = compareFn(a, b);
  return result === Compare.LESS_THAN || result === Compare.EQUALS;
}

/**
 * 小于
 * @param {*} a
 * @param {*} b
 * @param {*} compareFn，默认为defaultCompare函数
 * @returns Boolean
 */
export function lessThan(a, b, compareFn = defaultCompare) {
  const result = compareFn(a, b);
  return result === Compare.LESS_THAN;
}

/**
 * 大于
 * @param {*} a
 * @param {*} b
 * @param {*} compareFn，默认为defaultCompare函数
 * @returns Boolean
 */
export function biggerThan(a, b, compareFn = defaultCompare) {
  const result = compareFn(a, b);
  return result === Compare.BIGGER_THAN;
}
