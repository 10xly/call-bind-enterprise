var $bind = require("./functionBind")
var $call = require("./global/Function.prototype.call")
var $apply = require("./global/Function.prototype.apply")
var call = require("./callBoundCall")

module.exports = call($bind, $call, $apply)