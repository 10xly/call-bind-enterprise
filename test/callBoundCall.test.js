const tap = require("tap")
const callBoundCall = require("../src/callBoundCall")

tap.test("callBoundCall works like Function.prototype.call", (t) => {
  function add(a, b) {
    return a + b
  }

  const result1 = callBoundCall(add, null, 2, 3)
  t.equal(result1, 5, "adds numbers correctly")

  const obj = { value: 10 }
  function getValue() {
    return this.value
  }

  const result2 = callBoundCall(getValue, obj)
  t.equal(result2, 10, "respects thisArg")

  t.end()
})
