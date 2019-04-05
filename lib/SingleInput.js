'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SingleInput = function (_React$PureComponent) {
  _inherits(SingleInput, _React$PureComponent);

  function SingleInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SingleInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SingleInput.__proto__ || Object.getPrototypeOf(SingleInput)).call.apply(_ref, [this].concat(args))), _this), _this.getClasses = function () {
      for (var _len2 = arguments.length, classes = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        classes[_key2] = arguments[_key2];
      }

      return classes.filter(function (c) {
        return !(0, _helpers.isObject)(c) && c !== false;
      }).join(' ');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SingleInput, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          focus = _props.focus,
          shouldAutoFocus = _props.shouldAutoFocus;
      // if (this.input && focus && shouldAutoFocus) this.input.focus();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var input = this.input,
          focus = this.props.focus;

      if (prevProps.focus !== focus && input && focus) {
        input.focus();
        // input.select();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          separator = _props2.separator,
          isLastChild = _props2.isLastChild,
          inputStyle = _props2.inputStyle,
          focus = _props2.focus,
          isDisabled = _props2.isDisabled,
          error = _props2.error,
          errorStyle = _props2.errorStyle,
          focusStyle = _props2.focusStyle,
          valueEnteredStyle = _props2.valueEnteredStyle,
          disabledStyle = _props2.disabledStyle,
          shouldAutoFocus = _props2.shouldAutoFocus,
          value = _props2.value,
          style = _props2.style,
          rest = _objectWithoutProperties(_props2, ['separator', 'isLastChild', 'inputStyle', 'focus', 'isDisabled', 'error', 'errorStyle', 'focusStyle', 'valueEnteredStyle', 'disabledStyle', 'shouldAutoFocus', 'value', 'style']);

      return _react2.default.createElement(
        'div',
        { style: { display: 'flex', alignItems: 'center' } },
        _react2.default.createElement('input', _extends({
          style: Object.assign((0, _helpers.isObject)(style) && style, { width: '1em', textAlign: 'center' }, inputStyle, value && (0, _helpers.isObject)(valueEnteredStyle) && valueEnteredStyle, focus && (0, _helpers.isObject)(focusStyle) && focusStyle, isDisabled && (0, _helpers.isObject)(disabledStyle) && disabledStyle, error && (0, _helpers.isObject)(errorStyle) && errorStyle),
          maxLength: '1',
          ref: function ref(input) {
            _this2.input = input;
          },
          disabled: isDisabled,
          value: value ? value : '',
          autoComplete: 'off'
        }, rest)),
        !isLastChild && separator
      );
    }
  }]);

  return SingleInput;
}(_react2.default.PureComponent);

exports.default = SingleInput;