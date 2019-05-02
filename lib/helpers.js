"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keyboard = exports.isObject = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isObject = function isObject(obj) {
  return _typeof(obj) === "object";
};

exports.isObject = isObject;
var keyboard = {
  BACKSPACE: 8,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39,
  DELETE: 46
};
exports.keyboard = keyboard;