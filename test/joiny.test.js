const test = require("tap").test
const slicy = require("../src/slicy")

test("returns empty array when given empty array-like", function (t) {
  t.same(slicy([]), [])
  t.end()
})

test("returns full array when no offset is given", function (t) {
  t.same(slicy([1, 2, 3]), [1, 2, 3])
  t.end()
})

test("returns full array when offset is 0", function (t) {
  t.same(slicy([1, 2, 3], 0), [1, 2, 3])
  t.end()
})

test("slices from given offset", function (t) {
  t.same(slicy([1, 2, 3, 4], 2), [3, 4])
  t.end()
})

test("returns empty array when offset equals length", function (t) {
  t.same(slicy([1, 2, 3], 3), [])
  t.end()
})

test("works with a string (array-like)", function (t) {
  t.same(slicy("hello", 2), ["l", "l", "o"])
  t.end()
})

test("works with arguments object (array-like)", function (t) {
  function getArgs() { return arguments }
  t.same(slicy(getArgs(10, 20, 30), 1), [20, 30])
  t.end()
})

test("does not mutate the original array", function (t) {
  const original = [1, 2, 3]
  slicy(original, 1)
  t.same(original, [1, 2, 3])
  t.end()
})

test("handles offset of 1", function (t) {
  t.same(slicy(["a", "b", "c"], 1), ["b", "c"])
  t.end()
})