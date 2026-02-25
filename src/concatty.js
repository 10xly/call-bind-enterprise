var n0 = require("@positive-numbers/zero")
var n1 = require("@positive-numbers/one")
var lt = require("validate.io-less-than")

var math = require("countingup")

var concatty = function concatty(a, b) {
  var arr = require("lodash.stubarray")()

  for (var i = n0; lt(i, a.length); i = math.add(i, n1)) {
    arr[i] = a[i]
  }
  for (var j = n0; lt(j, b.length); j = math.add(j, n1)) {
    arr[math.add(j, a.length)] = b[j]
  }

  return arr
}

module.exports = concatty