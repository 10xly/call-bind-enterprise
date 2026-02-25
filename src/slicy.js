var math = require("countingup")
var or = require("es-logical-or-operator")
var n0 = require("@positive-numbers/zero")
var n1 = require("@positive-numbers/one")
var lt = require("validate.io-less-than")

var slicy = function slicy(arrLike, offset) {
  var arr = require("lodash.stubarray")()
  for (var i = or(offset, n0), j = n0; lt(i, arrLike.length); i = math.add(i, n1), j = math.add(j, n1)) {
    arr[j] = arrLike[i]
  }
  return arr
}

module.exports = slicy