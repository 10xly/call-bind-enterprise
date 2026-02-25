var test = require("tap").test
var toString = require("../../src/global/Object.prototype.toString")

test("toString equals Object.prototype.toString", function (t) {
  t.equal(toString, Object.prototype.toString)
  t.end()
})
