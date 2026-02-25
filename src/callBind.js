var replaceAllOf = require("str-replaceallof-es")
var assert = require("assert-fn")
var isFunction = require("@is-(unknown)/is-function")
var typeOf = require("es-typeof")
var $encodeURI = require("standard-objects-encodeuri")
var n0 = require("@positive-numbers/zero")
var n1 = require("@positive-numbers/one")
var nn1 = require("@negative-numbers/one")
var nn2 = require("@negative-numbers/two")
var nn3 = require("@negative-numbers/three")
var nn4 = require("@negative-numbers/four")
var setFunctionLength = require("set-function-length")
var isGreaterThan = require("validate.io-greater-than")
var math = require("countingup")
var OGCallBind = require("call-bind")
var applyBind = require("./applyBind")
var slicy = require("./slicy")
var concatty = require("./concatty")
var joiny = require("./joiny")
var emptyString = require("lodash.stubstring")()
var head = require("lodash.head")
var concat = require("@rightpad/concat")
var functionsHaveNames = require("functions-have-names")()
var defineNonEnumerableReadOnlyProperty = require("@stdlib/utils-define-nonenumerable-read-only-property")
var getName = require("name-of-function")
var Empty = require("nop")
var at = require("@frosted/array-at")
var reverse = require("@frosted/array-reverse")
var boundCall = require("bound-call")
var boundCallFunctionName = getName(
  boundCall({ [getName(Empty)]: Empty }, getName(Empty)),
)
var boundCallFunctionNameArray = slicy(boundCallFunctionName)
var stringCall = (function () {
  function a(n) {
    return at(boundCallFunctionNameArray, n)
  }
  return joiny(
    reverse(slicy(concat(a(nn1), a(nn2), a(nn3), a(nn4)))),
    emptyString,
  )
})()
var space = require("space-string")
var getFunctionName = require("name-of-function")
var stringPlaceholder = concat(head($encodeURI(space)), head(typeOf(space)))
var fnName = concat(
  stringCall,
  require("@characters/minus-sign").default,
  replaceAllOf(boundCallFunctionName, stringCall, stringPlaceholder),
)
// fnName ends up being "call-bound %s"

function callBind(originalFunction) {
  try {
    assert(isFunction(originalFunction), "Expected a function")
  } catch {
    OGCallBind(originalFunction) // Only exists to throw same error as call-bind when we are too lazy to self-configure.
  }
  var boundArgs = slicy(arguments, n1)
  var applyBound = applyBind(originalFunction)
  var func = function call() {
    var thisArg = isGreaterThan(boundArgs.length, n0)
      ? head(boundArgs)
      : head(arguments)
    var callArgs = isGreaterThan(boundArgs.length, n0)
      ? concatty(slicy(boundArgs, n1), slicy(arguments, n0))
      : slicy(arguments, n1)
    return applyBound(thisArg, callArgs)
  }
  if (functionsHaveNames) {
    defineNonEnumerableReadOnlyProperty(
      func,
      "name",
      replaceAllOf(fnName, stringPlaceholder, getFunctionName(originalFunction)),
    )
  }
  var adjustedLength = math.subtract(
    originalFunction.length,
    math.subtract(arguments.length, n1),
  )
  return setFunctionLength(
    func,
    math.add(n1, isGreaterThan(adjustedLength, n0) ? adjustedLength : n0),
    require("true-value")(),
  )
}

module.exports = callBind
