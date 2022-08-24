import test from "ava";
import { insertionSort } from "../insertion-sort.js";

test("insertion-sort", (t) => {
  t.deepEqual(insertionSort([6, 5, 4, 2, 3, 1]), [1, 2, 3, 4, 5, 6]);
  t.deepEqual(insertionSort([3, 2, 1, -1, 0, 100]), [-1, 0, 1, 2, 3, 100]);
});
