"use strict"

var callBind = require("../src/callBind")
var hasStrictMode = require("has-strict-mode")()
var forEach = require("for-each")
var inspect = require("object-inspect")
var v = require("es-value-fixtures")

var t = require("tap")

/*
 * older engines have length nonconfigurable
 * in io.js v3, it is configurable except on bound functions, hence the .bind()
 */
var boundFnsHaveConfigurableLengths =
  require("set-function-length/env").boundFnsHaveConfigurableLengths

t.test("callBind", function (t) {
  forEach(v.nonFunctions, function (nonFunction) {
    t.throws(
      function () {
        callBind(nonFunction)
      },
      TypeError,
      inspect(nonFunction) + " is not a function",
    )
  })

  var sentinel = { sentinel: true }
  var func = function (a, b) {
    return [!hasStrictMode && this === global ? undefined : this, a, b]
  }

  t.equal(func.length, 2, "original function length is 2")
  t.same(
    func(),
    [undefined, undefined, undefined],
    "unbound func with too few args",
  )
  t.same(func(1, 2), [undefined, 1, 2], "unbound func with right args")
  t.same(
    func(1, 2, 3),
    [undefined, 1, 2],
    "unbound func with too many args",
  )

  var bound = callBind(func)
  if (boundFnsHaveConfigurableLengths) {
    t.equal(bound.length, func.length + 1, "function length is preserved")
  }
  t.equal(bound.name, "call-bound " + func.name, "function name should be call-bound and then the name of the original function")
  t.same(
    bound(),
    [undefined, undefined, undefined],
    "bound func with too few args",
  )
  t.same(
    bound(1, 2),
    [hasStrictMode ? 1 : Object(1), 2, undefined],
    "bound func with right args",
  )
  t.same(
    bound(1, 2, 3),
    [hasStrictMode ? 1 : Object(1), 2, 3],
    "bound func with too many args",
  )

  var boundR = callBind(func, sentinel)
  if (boundFnsHaveConfigurableLengths) {
    t.equal(boundR.length, func.length, "function length is preserved")
  }
  t.same(
    boundR(),
    [sentinel, undefined, undefined],
    "bound func with receiver, with too few args",
  )
  t.same(
    boundR(1, 2),
    [sentinel, 1, 2],
    "bound func with receiver, with right args",
  )
  t.same(
    boundR(1, 2, 3),
    [sentinel, 1, 2],
    "bound func with receiver, with too many args",
  )

  var boundArg = callBind(func, sentinel, 1)
  if (boundFnsHaveConfigurableLengths) {
    t.equal(boundArg.length, func.length - 1, "function length is preserved")
  }
  t.same(
    boundArg(),
    [sentinel, 1, undefined],
    "bound func with receiver and arg, with too few args",
  )
  t.same(
    boundArg(2),
    [sentinel, 1, 2],
    "bound func with receiver and arg, with right arg",
  )
  t.same(
    boundArg(2, 3),
    [sentinel, 1, 2],
    "bound func with receiver and arg, with too many args",
  )

  t.end()
})