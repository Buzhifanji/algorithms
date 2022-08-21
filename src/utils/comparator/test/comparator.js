import test from "ava";
import {
  biggerEquals,
  biggerThan,
  Compare,
  defaultEquals,
  lesserEquals,
  lessThan,
} from "../comparator.js";

test("comparator", (t) => {
  t.true(defaultEquals(0, 0));
  t.false(defaultEquals(0, 1));
  t.true(defaultEquals("a", "a"));
  t.false(defaultEquals("a", "b"));

  t.true(biggerEquals(1, 0));
  t.true(biggerEquals(1, 1));
  t.false(biggerEquals(1, 10));

  t.true(lesserEquals(0, 1));
  t.true(lesserEquals(1, 1));
  t.false(lesserEquals(10, 1));

  t.true(lessThan(0, 1));
  t.false(lessThan(1, 1));
  t.false(lessThan(10, 1));

  t.true(biggerThan(1, 0));
  t.false(biggerThan(1, 1));
  t.false(biggerThan(1, 10));
});

test("custom comparator", (t) => {
  function compareFn(a, b) {
    if (a.length === b.length) return Compare.EQUALS;
    return a.length > b.length ? Compare.BIGGER_THAN : Compare.LESS_THAN;
  }

  t.true(defaultEquals("a", "b", compareFn));
  t.false(defaultEquals("a", "", compareFn));

  t.true(biggerEquals("aa", "a", compareFn));
  t.true(biggerEquals("aa", "ab", compareFn));
  t.false(biggerEquals("a", "aa", compareFn));

  t.true(lesserEquals("a", "aa", compareFn));
  t.true(lesserEquals("ab", "aa", compareFn));
  t.false(lesserEquals("aa", "a", compareFn));

  t.true(lessThan("a", "aa", compareFn));
  t.false(lessThan("ab", "aa", compareFn));
  t.false(lessThan("aa", "a", compareFn));

  t.true(biggerThan("aa", "a", compareFn));
  t.false(biggerThan("ab", "aa", compareFn));
  t.false(biggerThan("a", "aa", compareFn));
});
