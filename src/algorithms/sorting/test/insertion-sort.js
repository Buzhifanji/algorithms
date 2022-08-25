import test from "ava";
import { insertionSortNotUp } from "../exercise/insertion-sort-not-up.js";
import { insertionSort } from "../insertion-sort.js";

test("insertion-sort", (t) => {
  t.deepEqual(insertionSort([6, 5, 4, 2, 3, 1]), [1, 2, 3, 4, 5, 6]);
  t.deepEqual(insertionSort([3, 2, 1, -1, 0, 100]), [-1, 0, 1, 2, 3, 100]);
});

test("insertion-sort-not-up", (t) => {
  t.deepEqual(insertionSortNotUp([1, 2, 3, 4, 5, 6]), [6, 5, 4, 3, 2, 1]);
  t.deepEqual(insertionSortNotUp([3, 2, 1, -1, 0, 100]), [100, 3, 2, 1, 0, -1]);
});
