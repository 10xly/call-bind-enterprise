"use strict"

var test = require("tap").test
var applyBind = require("../src/applyBind")

test("applyBind", function (t) {
  t.test("overload 1: applyBind(fn)", function (t) {
    var fn = function (a, b) {
      return a + b
    }
    var bound = applyBind(fn)
    t.equal(bound(null, [1, 2]), 3, "calls fn with thisArg and args")
    t.end()
  })

  t.test("overload 2: applyBind(fn, thisArg)", function (t) {
    var fn = function (a) {
      return this.x + a
    }
    var bound = applyBind(fn, { x: 10 })
    t.equal(bound([5]), 15, "calls fn with preset thisArg")
    t.end()
  })

  t.test("overload 3: applyBind(fn, thisArg, args)", function (t) {
    var fn = function (a, b) {
      return this.x + a + b
    }
    var bound = applyBind(fn, { x: 10 }, [1, 2])
    t.equal(bound(), 13, "calls fn with preset thisArg and args")
    t.end()
  })

  t.test("preserves thisArg correctly", function (t) {
    var fn = function () {
      return this
    }
    var ctx = { hello: "world" }
    var bound = applyBind(fn, ctx)
    t.equal(bound([]), ctx, "thisArg is preserved")
    t.end()
  })

  t.end()
})
