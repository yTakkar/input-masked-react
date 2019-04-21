"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const helpers_1 = require("./helpers");
class SingleInput extends react_1.default.PureComponent {
    constructor(props) {
        super(props);
        this.handleRef = (input) => {
            this.input = input;
        };
        this.input = undefined;
    }
    // public componentDidMount() {
    //   const { focus, shouldAutoFocus } = this.props
    //   if (this.input && focus && shouldAutoFocus) this.input.focus()
    // }
    componentDidUpdate(prevProps) {
        const { input, props } = this;
        const { focus } = props;
        if (prevProps.focus !== focus && (input && focus)) {
            input.focus();
            // input.select()
        }
    }
    render() {
        const { separator, isLastChild, inputStyle, focus, isDisabled, error, errorStyle, focusStyle, valueEnteredStyle, disabledStyle, value, style, ...rest } = this.props;
        return (react_1.default.createElement("div", { style: { display: 'flex', alignItems: 'center' } },
            react_1.default.createElement("input", Object.assign({ style: Object.assign(helpers_1.isObject(style) ? style : {}, { width: '1em', textAlign: 'center' }, inputStyle, value && helpers_1.isObject(valueEnteredStyle) && valueEnteredStyle, focus && helpers_1.isObject(focusStyle) && focusStyle, isDisabled && helpers_1.isObject(disabledStyle) && disabledStyle, error && helpers_1.isObject(errorStyle) && errorStyle), maxLength: 1, ref: this.handleRef, disabled: isDisabled, value: value ? value : '', autoComplete: 'off' }, rest)),
            !isLastChild && separator));
    }
}
exports.default = SingleInput;
