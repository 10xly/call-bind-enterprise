const tap = require("tap")
const callBoundApply = require("../src/callBoundApply")

tap.test("callBoundApply works like Reflect.apply", (t) => {
  function multiply(x, y) {
    return x * y
  }

  const result1 = callBoundApply(multiply, null, [4, 5])
  t.equal(result1, 20, "multiplies numbers correctly")

  const obj = { factor: 3 }
  function scale(n) {
    return n * this.factor
  }

  const result2 = callBoundApply(scale, obj, [7])
  t.equal(result2, 21, "respects thisArg")

  t.end()
})
