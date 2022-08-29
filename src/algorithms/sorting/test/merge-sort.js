import test from "ava";
import { mergeSort } from "../merge-sort.js";

test("merge-sort", (t) => {
  t.deepEqual(mergeSort([6, 5, 4, 2, 3, 1]), [1, 2, 3, 4, 5, 6]);
  t.deepEqual(mergeSort([3, 2, 1, -1, 0, 100]), [-1, 0, 1, 2, 3, 100]);
});
