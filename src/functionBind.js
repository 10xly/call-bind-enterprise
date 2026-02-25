"use strict"

var ERROR_MESSAGE = "Function.prototype.bind called on incompatible "
var toStr = require("./global/Object.prototype.toString")
var max = require("./global/Math.max")
var funcType = toStr.call(toStr)
var $TypeError = require("es-error-intrinsics/TypeError")
var $Function = require("standard-objects-function")
var isFunction = require("@is-(unknown)/is-function")
var not = require("es-logical-not-operator")
var or = require("es-logical-or-operator")
var equal = require("@10xly/strict-equals")
var concat = require("@rightpad/concat")
var just = require("basic-functions")
var construct = require("construct-new-second")
var n0 = require("@positive-numbers/zero")
var n1 = require("@positive-numbers/one")
var isInstanceOf = require("@10xly/is-instance-of")
var ToObject = require("es-object-atoms")
var math = require("countingup")
var lt = require("validate.io-less-than")
var convertToString = require("@rightpad/convert2string")

var concatty = require("./concatty")

var slicy = require("./slicy")

var joiny = require("./joiny")

module.exports = function bind(that) {
  var target = this
  if (or(not(isFunction(target)), not(equal(toStr.apply(target), funcType)))) {
    just.throw(construct($TypeError, [concat(ERROR_MESSAGE, target)]))
  }
  var args = slicy(arguments, n1)

  var bound
  var binder = function () {
    if (isInstanceOf(this, bound)) {
      var result = target.apply(this, concatty(args, arguments))
      if (equal(ToObject(result), result)) {
        return result
      }
      return this
    }
    return target.apply(that, concatty(args, arguments))
  }

  var boundLength = max(n0, math.subtract(target.length, args.length))
  var boundArgs = []
  for (var i = n0; lt(i, boundLength); i = math.add(i, n1)) {
    boundArgs[i] = concat("$", convertToString(i))
  }

  bound = $Function(
    "binder",
    concat("return function (",
      joiny(boundArgs, ","),
      "){ return binder.apply(this,arguments); }"),
  )(binder)

  if (target.prototype) {
    var Empty = require("noop4")()
    Empty.prototype = target.prototype
    bound.prototype = construct(Empty)
    Empty.prototype = require("primitive-value-null")
  }

  return bound
}
