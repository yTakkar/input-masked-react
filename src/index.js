import React from 'react';
import { isObject, keyboard } from './helpers';
import SingleInput from './SingleInput';

class MaskedInput extends React.Component {
  state = {
    activeInput: 0,
    inputsValue: [],
    hidePlaceholder: {},
  };

  getInputsValue = () => this.props.onChange(this.state.inputsValue.join(''));

  // Focus on input by index
  focusInput = input => {
    const { numInputs } = this.props;
    const activeInput = Math.max(Math.min(numInputs - 1, input), 0);
    this.setState({ activeInput });
  };

  // Focus on next input
  focusNextInput = () => {
    const { activeInput } = this.state;
    this.focusInput(activeInput + 1);
  };

  // Focus on previous input
  focusPrevInput = () => {
    const { activeInput } = this.state;
    this.focusInput(activeInput - 1);
  };

  // Change inputsValue value at focused input
  changeCodeAtFocus = value => {
    const { activeInput, inputsValue } = this.state;
    inputsValue[activeInput] = value;
    this.setState({ inputsValue });
    this.getInputsValue();
  };

  // Handle pasted inputsValue
  handleOnPaste = e => {
    e.preventDefault();
    const { numInputs } = this.props;
    const { activeInput, inputsValue } = this.state;

    // Get pastedData in an array of max size (num of inputs - current position)
    const pastedData = e.clipboardData
      .getData('text/plain')
      .slice(0, numInputs - activeInput)
      .split('');

    // Paste data from focused input onwards
    for (let pos = 0; pos < numInputs; ++pos) {
      if (pos >= activeInput && pastedData.length > 0) {
        inputsValue[pos] = pastedData.shift();
      }
    }

    this.setState({ inputsValue });
    this.getInputsValue();
  };

  handleOnChange = e => {
    this.changeCodeAtFocus(e.target.value);
    this.focusNextInput();
  };

  handleOnKeyDown = e => {
    switch (e.keyCode) {
      case keyboard.BACKSPACE:
        e.preventDefault();
        this.changeCodeAtFocus('');
        this.focusPrevInput();
        break;
      case keyboard.DELETE:
        e.preventDefault();
        this.changeCodeAtFocus('');
        break;
      case keyboard.LEFT_ARROW:
        e.preventDefault();
        this.focusPrevInput();
        break;
      case keyboard.RIGHT_ARROW:
        e.preventDefault();
        this.focusNextInput();
        break;
      default:
        break;
    }
  };

  getRestInputProps = i => {
    const { placeholder: _, ...restInputProps } =
      this.props.inputPropsMap[i] || {};
    return restInputProps;
  };

  getInputPlaceholder = i => {
    const { inputPropsMap, placeholder } = this.props;
    const { hidePlaceholder } = this.state;
    if (!hidePlaceholder[i] && inputPropsMap[i])
      return inputPropsMap[i].placeholder;
    if (!hidePlaceholder[i] && placeholder) return placeholder;
    return '';
  };

  renderInputs = () => {
    const { activeInput, inputsValue } = this.state;
    const {
      numInputs,
      inputStyle,
      focusStyle,
      separator,
      isDisabled,
      disabledStyle,
      error,
      errorStyle,
      shouldAutoFocus,
      isInputNum,
      groupSeperatorPositions,
      groupSeperator,
    } = this.props;
    const inputs = [];

    for (let i = 0; i < numInputs; i++) {
      inputs.push(
        <React.Fragment>
          <SingleInput
            key={i}
            focus={activeInput === i}
            value={inputsValue && inputsValue[i]}
            onChange={this.handleOnChange}
            onKeyDown={this.handleOnKeyDown}
            onPaste={this.handleOnPaste}
            onFocus={e => {
              this.setState({
                activeInput: i,
                hidePlaceholder: { [i]: true },
              });
              e.target.select();
            }}
            onBlur={() => {
              this.setState({
                activeInput: -1,
                hidePlaceholder: { [i]: false },
              });
            }}
            separator={separator}
            inputStyle={inputStyle}
            focusStyle={focusStyle}
            isLastChild={i === numInputs - 1}
            isDisabled={isDisabled}
            disabledStyle={disabledStyle}
            error={error}
            errorStyle={errorStyle}
            shouldAutoFocus={shouldAutoFocus}
            isInputNum={isInputNum}
            placeholder={this.getInputPlaceholder(i)}
            {...this.getRestInputProps(i)}
          />
          {groupSeperatorPositions.includes(i) && groupSeperator}
        </React.Fragment>
      );
    }
    return inputs;
  };

  render() {
    const { containerStyle, errorText, error } = this.props;
    return (
      <div>
        <div
          style={Object.assign(
            { display: "flex" },
            isObject(containerStyle) && containerStyle
          )}
          className={!isObject(containerStyle) && containerStyle}
        >
          {this.renderInputs()}
        </div>
        {error && errorText}
      </div>
    );
  }
}

MaskedInput.defaultProps = {
  numInputs: 4,
  onChange: () => {},
  isDisabled: false,
  shouldAutoFocus: false,
  inputPropsMap: {},
  groupSeperatorPositions: [],
  separator: <span>&nbsp;</span>,
};

export default MaskedInput;