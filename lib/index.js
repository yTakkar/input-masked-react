"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("./helpers");

var _SingleInput = _interopRequireDefault(require("./SingleInput"));

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

var MaskedInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MaskedInput, _React$Component);

  function MaskedInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MaskedInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MaskedInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeInput: 0,
      inputsValue: _this.props.defaultValues,
      hidePlaceholder: {}
    });

    _defineProperty(_assertThisInitialized(_this), "getInputsValue", function () {
      return _this.props.onChange(_this.state.inputsValue.join(""));
    });

    _defineProperty(_assertThisInitialized(_this), "focusInput", function (input) {
      var numInputs = _this.props.numInputs; // const { inputsValue } = this.state

      var activeInput = Math.max(Math.min(numInputs - 1, input), 0); // if (inputsValue[activeInput + 1]) return;

      _this.setState({
        activeInput: activeInput
      });
    });

    _defineProperty(_assertThisInitialized(_this), "focusNextInput", function () {
      var activeInput = _this.state.activeInput;

      _this.focusInput(activeInput + 1);
    });

    _defineProperty(_assertThisInitialized(_this), "focusPrevInput", function () {
      var activeInput = _this.state.activeInput;

      _this.focusInput(activeInput - 1);
    });

    _defineProperty(_assertThisInitialized(_this), "changeCodeAtFocus", function (value) {
      var _this$state = _this.state,
          activeInput = _this$state.activeInput,
          inputsValue = _this$state.inputsValue;
      inputsValue[activeInput] = value;

      _this.setState({
        inputsValue: inputsValue
      });

      _this.getInputsValue();
    });

    _defineProperty(_assertThisInitialized(_this), "removeOneCharAtFocus", function () {
      var _this$state2 = _this.state,
          inputsValue = _this$state2.inputsValue,
          activeInput = _this$state2.activeInput;
      var onChange = _this.props.onChange;
      var updatedValue = inputsValue.map(function (inp, i) {
        if (i === activeInput) return inp.slice(0, -1);
        return inp;
      });

      _this.setState({
        inputsValue: updatedValue
      });

      onChange(updatedValue.join(""));
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnPaste", function (e) {
      e.preventDefault();
      var numInputs = _this.props.numInputs;
      var _this$state3 = _this.state,
          activeInput = _this$state3.activeInput,
          inputsValue = _this$state3.inputsValue; // Get pastedData in an array of max size (num of inputs - current position)

      var pastedData = e.clipboardData.getData("text/plain").slice(0, numInputs - activeInput).split(""); // Paste data from focused input onwards

      for (var pos = 0; pos < numInputs; ++pos) {
        if (pos >= activeInput && pastedData.length > 0) {
          inputsValue[pos] = pastedData.shift();
        }
      }

      _this.setState({
        inputsValue: inputsValue
      });

      _this.getInputsValue();
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnChange", function (e) {
      var inputLength = _this.props.inputLength;
      if (_this.props.isNumeric && isNaN(e.target.value)) return;

      _this.changeCodeAtFocus(e.target.value);

      if (e.target.value.length === inputLength) _this.focusNextInput();
    });

    _defineProperty(_assertThisInitialized(_this), "isCurrentEmpty", function () {
      var _this$state4 = _this.state,
          activeInput = _this$state4.activeInput,
          inputsValue = _this$state4.inputsValue;
      return !inputsValue[activeInput];
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnKeyDown", function (e) {
      switch (e.keyCode) {
        case _helpers.keyboard.BACKSPACE:
          e.preventDefault();
          if (_this.isCurrentEmpty()) _this.focusPrevInput();

          _this.removeOneCharAtFocus();

          break;

        case _helpers.keyboard.DELETE:
          e.preventDefault();

          _this.removeOneCharAtFocus();

          break;

        case _helpers.keyboard.LEFT_ARROW:
          e.preventDefault();

          _this.focusPrevInput();

          break;

        case _helpers.keyboard.RIGHT_ARROW:
          e.preventDefault();

          _this.focusNextInput();

          break;

        default:
          break;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getRestInputProps", function (i) {
      var _ref = _this.props.inputPropsMap[i] || {},
          _ = _ref.placeholder,
          restInputProps = _objectWithoutProperties(_ref, ["placeholder"]);

      return restInputProps;
    });

    _defineProperty(_assertThisInitialized(_this), "getInputPlaceholder", function (i) {
      var _this$props = _this.props,
          inputPropsMap = _this$props.inputPropsMap,
          placeholder = _this$props.placeholder;
      var hidePlaceholder = _this.state.hidePlaceholder;
      if (!hidePlaceholder[i] && inputPropsMap[i]) return inputPropsMap[i].placeholder;
      if (!hidePlaceholder[i] && placeholder) return placeholder;
      return "";
    });

    _defineProperty(_assertThisInitialized(_this), "renderInputs", function () {
      var _this$state5 = _this.state,
          activeInput = _this$state5.activeInput,
          inputsValue = _this$state5.inputsValue;
      var _this$props2 = _this.props,
          numInputs = _this$props2.numInputs,
          inputStyle = _this$props2.inputStyle,
          focusStyle = _this$props2.focusStyle,
          valueEnteredStyle = _this$props2.valueEnteredStyle,
          separator = _this$props2.separator,
          isDisabled = _this$props2.isDisabled,
          disabledStyle = _this$props2.disabledStyle,
          error = _this$props2.error,
          errorStyle = _this$props2.errorStyle,
          shouldAutoFocus = _this$props2.shouldAutoFocus,
          groupSeparatorPositions = _this$props2.groupSeparatorPositions,
          groupSeparator = _this$props2.groupSeparator,
          isNumeric = _this$props2.isNumeric,
          inputClassName = _this$props2.inputClassName,
          inputLength = _this$props2.inputLength;
      var inputs = [];

      var _loop = function _loop(i) {
        inputs.push(_react["default"].createElement(_react["default"].Fragment, {
          key: i
        }, _react["default"].createElement(_SingleInput["default"], _extends({
          focus: activeInput === i,
          value: inputsValue && inputsValue[i],
          onChange: _this.handleOnChange,
          onKeyDown: _this.handleOnKeyDown,
          onPaste: _this.handleOnPaste,
          onFocus: function onFocus() {
            _this.setState({
              activeInput: i,
              hidePlaceholder: _defineProperty({}, i, true) // inputsValue: inputsValue.map((value, index) =>
              //   index === i ? "" : value
              // )

            }); // e.target.select();

          },
          onBlur: function onBlur() {
            _this.setState({
              activeInput: -1,
              hidePlaceholder: _defineProperty({}, i, false)
            });
          },
          separator: separator,
          inputStyle: inputStyle,
          focusStyle: focusStyle,
          valueEnteredStyle: valueEnteredStyle,
          isLastChild: i === numInputs - 1,
          isDisabled: isDisabled,
          disabledStyle: disabledStyle,
          error: error,
          errorStyle: errorStyle,
          shouldAutoFocus: shouldAutoFocus,
          placeholder: _this.getInputPlaceholder(i),
          type: isNumeric ? "tel" : "",
          className: inputClassName,
          inputLength: inputLength
        }, _this.getRestInputProps(i))), groupSeparatorPositions.includes(i) && groupSeparator));
      };

      for (var i = 0; i < numInputs; i++) {
        _loop(i);
      }

      return inputs;
    });

    return _this;
  }

  _createClass(MaskedInput, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          containerStyle = _this$props3.containerStyle,
          errorText = _this$props3.errorText,
          error = _this$props3.error;
      return _react["default"].createElement("div", null, _react["default"].createElement("div", {
        style: Object.assign({
          display: "flex"
        }, (0, _helpers.isObject)(containerStyle) && containerStyle),
        className: !(0, _helpers.isObject)(containerStyle) ? containerStyle : ""
      }, this.renderInputs()), error && errorText ? errorText : null);
    }
  }]);

  return MaskedInput;
}(_react["default"].Component);

MaskedInput.defaultProps = {
  isDisabled: false,
  shouldAutoFocus: false,
  inputPropsMap: {},
  groupSeparatorPositions: [],
  groupSeparator: "",
  separator: _react["default"].createElement("span", null, "\xA0"),
  defaultValues: [],
  isNumeric: false,
  inputLength: 1,
  inputStyle: {},
  errorStyle: {},
  focusStyle: {},
  valueEnteredStyle: {},
  disabledStyle: {},
  containerStyle: {},
  error: false,
  errorText: "",
  inputClassName: "",
  placeholder: ""
};
var _default = MaskedInput;
exports["default"] = _default;