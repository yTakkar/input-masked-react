"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const helpers_1 = require("./helpers");
const SingleInput_1 = __importDefault(require("./SingleInput"));
const MaskedInput = props => {
    const { containerStyle, error, errorText, numInputs, inputStyle, focusStyle, valueEnteredStyle, separator, isDisabled, disabledStyle, errorStyle, groupSeparatorPositions, groupSeparator, isNumeric, inputClassName, inputPropsMap, placeholder, onChange, defaultValues, } = props;
    const [activeInput, setActiveInput] = react_1.useState(0);
    const [inputsValue, setInputsValue] = react_1.useState(defaultValues);
    const [hidePlaceholder, setHidePlaceholder] = react_1.useState({});
    const getInputsValue = () => onChange(inputsValue.join(''));
    const updateInputsValue = helpers_1.updateArrayByIndex(inputsValue);
    // Focus on input by index
    const focusInput = (input) => {
        const updatedActiveInput = Math.max(Math.min(numInputs - 1, input), 0);
        // if (inputsValue[activeInput + 1]) return;
        setActiveInput(updatedActiveInput);
    };
    // Focus on next input
    const focusNextInput = () => focusInput(activeInput + 1);
    // Focus on previous input
    const focusPrevInput = () => focusInput(activeInput - 1);
    // Change inputsValue value at focused input
    const changeCodeAtFocus = (value) => {
        setInputsValue(updateInputsValue(activeInput, value));
        getInputsValue();
    };
    // Handle pasted inputsValue
    const handleOnPaste = (e) => {
        e.preventDefault();
        // Get pastedData in an array of max size (num of inputs - current position)
        const pastedData = e.clipboardData
            .getData('text/plain')
            .slice(0, numInputs - activeInput)
            .split('');
        // Paste data from focused input onwards
        for (let pos = 0; pos < numInputs; ++pos) {
            if (pos >= activeInput && pastedData.length > 0) {
                setInputsValue(updateInputsValue(pos, pastedData.shift()));
            }
        }
        getInputsValue();
    };
    const handleOnChange = (e) => {
        if (isNumeric && isNaN(e.target.value))
            return;
        changeCodeAtFocus(e.target.value);
        focusNextInput();
    };
    const isCurrentEmpty = () => !inputsValue[activeInput];
    const handleOnKeyDown = (e) => {
        switch (e.keyCode) {
            case helpers_1.keyboard.BACKSPACE:
                e.preventDefault();
                if (isCurrentEmpty())
                    focusPrevInput();
                changeCodeAtFocus('');
                break;
            case helpers_1.keyboard.DELETE:
                e.preventDefault();
                changeCodeAtFocus('');
                break;
            case helpers_1.keyboard.LEFT_ARROW:
                e.preventDefault();
                focusPrevInput();
                break;
            case helpers_1.keyboard.RIGHT_ARROW:
                e.preventDefault();
                focusNextInput();
                break;
            default:
                break;
        }
    };
    const handleOnFocus = (i) => (e) => {
        setActiveInput(i);
        setHidePlaceholder({ ...hidePlaceholder, [i]: true });
        // inputsValue: inputsValue.map((value, index) =>
        //   index === i ? "" : value
        // )
        // e.target.select();
    };
    const handleOnBlur = (i) => (e) => {
        setActiveInput(-1);
        setHidePlaceholder({ ...hidePlaceholder, [i]: false });
    };
    const getRestInputProps = (i) => {
        const { placeholder: _, ...restInputProps } = inputPropsMap[i] || {};
        return restInputProps;
    };
    const getInputPlaceholder = (i) => {
        if (!hidePlaceholder[i] && inputPropsMap[i]) {
            return inputPropsMap[i].placeholder;
        }
        if (!hidePlaceholder[i] && placeholder) {
            return placeholder;
        }
        return '';
    };
    const renderInputs = () => {
        const inputs = [];
        for (let i = 0; i < numInputs; i++) {
            inputs.push(react_1.default.createElement(react_1.default.Fragment, { key: i },
                react_1.default.createElement(SingleInput_1.default, Object.assign({ focus: activeInput === i, value: inputsValue && inputsValue[i], onChange: handleOnChange, onKeyDown: handleOnKeyDown, onPaste: handleOnPaste, onFocus: handleOnFocus(i), onBlur: handleOnBlur(i), separator: separator, inputStyle: inputStyle, focusStyle: focusStyle, valueEnteredStyle: valueEnteredStyle, isLastChild: i === numInputs - 1, isDisabled: isDisabled, disabledStyle: disabledStyle, error: error, errorStyle: errorStyle, placeholder: getInputPlaceholder(i), type: isNumeric ? 'tel' : '', className: inputClassName }, getRestInputProps(i))),
                groupSeparatorPositions.includes(i) && groupSeparator));
        }
        return inputs;
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { style: { display: 'flex', ...containerStyle } }, renderInputs()),
        error && errorText ? errorText : null));
};
MaskedInput.defaultProps = {
    numInputs: 4,
    onChange: () => null,
    isDisabled: false,
    inputPropsMap: {},
    groupSeparatorPositions: [],
    groupSeparator: react_1.default.createElement("span", null),
    separator: react_1.default.createElement("span", null, "\u00A0"),
    defaultValues: [],
    isNumeric: false,
};
exports.default = MaskedInput;
