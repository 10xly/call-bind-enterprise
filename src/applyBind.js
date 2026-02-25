var $bind = require("./functionBind")
var callBoundApply = require("./callBoundApply")
var $apply = require("./global/Function.prototype.apply")

module.exports = function applyBind() {
  return callBoundApply($bind, $apply, arguments)
}