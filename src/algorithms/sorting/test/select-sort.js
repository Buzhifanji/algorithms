import test from "ava";
import { selectSort } from "../select-sort.js";
test("select-sort", (t) => {
  t.deepEqual(selectSort([6, 5, 4, 2, 3, 1]), [1, 2, 3, 4, 5, 6]);
  t.deepEqual(selectSort([3, 2, 1, -1, 0, 100]), [-1, 0, 1, 2, 3, 100]);
});
