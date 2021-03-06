"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SingleInput =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(SingleInput, _React$PureComponent);

  function SingleInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SingleInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SingleInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getClasses", function () {
      for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        classes[_key2] = arguments[_key2];
      }

      return classes.filter(function (c) {
        return !(0, _helpers.isObject)(c) && c !== false;
      }).join(" ");
    });

    return _this;
  }

  _createClass(SingleInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {// const { focus, shouldAutoFocus } = this.props
      // if (this.input && focus && shouldAutoFocus) this.input.focus();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var input = this.input,
          focus = this.props.focus;

      if (prevProps.focus !== focus && input && focus) {
        input.focus(); // input.select();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          separator = _this$props.separator,
          isLastChild = _this$props.isLastChild,
          inputStyle = _this$props.inputStyle,
          focus = _this$props.focus,
          isDisabled = _this$props.isDisabled,
          error = _this$props.error,
          errorStyle = _this$props.errorStyle,
          focusStyle = _this$props.focusStyle,
          valueEnteredStyle = _this$props.valueEnteredStyle,
          disabledStyle = _this$props.disabledStyle,
          shouldAutoFocus = _this$props.shouldAutoFocus,
          value = _this$props.value,
          inputLength = _this$props.inputLength,
          inputClassName = _this$props.inputClassName,
          style = _this$props.style,
          className = _this$props.className,
          rest = _objectWithoutProperties(_this$props, ["separator", "isLastChild", "inputStyle", "focus", "isDisabled", "error", "errorStyle", "focusStyle", "valueEnteredStyle", "disabledStyle", "shouldAutoFocus", "value", "inputLength", "inputClassName", "style", "className"]);

      var cls = "".concat(inputClassName, " ").concat(className);
      return _react["default"].createElement("div", {
        style: {
          display: "flex",
          alignItems: "center"
        }
      }, _react["default"].createElement("input", _extends({
        style: Object.assign({
          width: "1em",
          textAlign: "center"
        }, inputStyle, style, value && valueEnteredStyle, focus && focusStyle, isDisabled && disabledStyle, error && errorStyle),
        maxLength: inputLength,
        ref: function ref(input) {
          _this2.input = input;
        },
        disabled: isDisabled,
        value: value || "",
        autoComplete: "off",
        className: cls
      }, rest)), !isLastChild && separator);
    }
  }]);

  return SingleInput;
}(_react["default"].PureComponent);

SingleInput.defaultProps = {
  value: "",
  inputClassName: "",
  className: "",
  style: {}
};
var _default = SingleInput;
exports["default"] = _default;