var test = require("tap").test
var concatty = require("../src/concatty")

test("concatty combines two arrays", function (t) {
  t.same(concatty([1, 2], [3, 4]), [1, 2, 3, 4])
  t.end()
})

test("concatty with empty first array", function (t) {
  t.same(concatty([], [1, 2, 3]), [1, 2, 3])
  t.end()
})

test("concatty with empty second array", function (t) {
  t.same(concatty([1, 2, 3], []), [1, 2, 3])
  t.end()
})

test("concatty with two empty arrays", function (t) {
  t.same(concatty([], []), [])
  t.end()
})

test("concatty with strings", function (t) {
  t.same(concatty(["a", "b"], ["c", "d"]), ["a", "b", "c", "d"])
  t.end()
})