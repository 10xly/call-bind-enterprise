var test = require("tap").test
var apply = require("../../src/global/Function.prototype.apply")

test("apply equals Function.prototype.apply", function (t) {
  t.equal(apply, Function.prototype.apply)
  t.end()
})
