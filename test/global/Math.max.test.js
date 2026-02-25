var test = require("tap").test
var max = require("../../src/global/Math.max")

test("max equals Math.max", function (t) {
  t.equal(max, Math.max)
  t.end()
})
