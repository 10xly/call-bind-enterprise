var n0 = require("@positive-numbers/zero")
var n1 = require("@positive-numbers/one")
var lt = require("validate.io-less-than")
var math = require("countingup")
var concat = require("@rightpad/concat")

var joiny = function (arr, joiner) {
  var str = require("lodash.stubstring")()
  for (var i = n0; lt(i, arr.length); i = math.add(i, n1)) {
    str = concat(str, arr[i])
    if (lt(math.add(i, n1), arr.length)) {
      str = concat(str, joiner)
    }
  }
  return str
}

module.exports = joiny