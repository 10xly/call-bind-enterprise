var test = require("tap").test
var call = require("../../src/global/Function.prototype.call")

test("call equals Function.prototype.call", function (t) {
  t.equal(call, Function.prototype.call)
  t.end()
})
