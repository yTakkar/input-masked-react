import React from "react"
import PropTypes from "prop-types"
import { isObject, keyboard } from "./helpers"
import SingleInput from "./SingleInput"

class MaskedInput extends React.Component {
  state = {
    activeInput: 0,
    inputsValue: this.props.defaultValues,
    hidePlaceholder: {},
  }

  getInputsValue = () => this.props.onChange(this.state.inputsValue.join(""))

  // Focus on input by index
  focusInput = input => {
    const { numInputs } = this.props
    // const { inputsValue } = this.state
    const activeInput = Math.max(Math.min(numInputs - 1, input), 0)
    // if (inputsValue[activeInput + 1]) return;
    this.setState({ activeInput })
  }

  // Focus on next input
  focusNextInput = () => {
    const { activeInput } = this.state
    this.focusInput(activeInput + 1)
  }

  // Focus on previous input
  focusPrevInput = () => {
    const { activeInput } = this.state
    this.focusInput(activeInput - 1)
  }

  // Change inputsValue value at focused input
  changeCodeAtFocus = value => {
    const { activeInput, inputsValue } = this.state
    inputsValue[activeInput] = value
    this.setState({ inputsValue })
    this.getInputsValue()
  }

  removeOneCharAtFocus = () => {
    const { inputsValue, activeInput } = this.state
    const { onChange } = this.props
    const updatedValue = inputsValue.map((inp, i) => {
      if (i === activeInput) return inp.slice(0, -1)
      return inp
    })
    this.setState({ inputsValue: updatedValue })
    onChange(updatedValue.join(""))
  }

  // Handle pasted inputsValue
  handleOnPaste = e => {
    e.preventDefault()
    const { numInputs } = this.props
    const { activeInput, inputsValue } = this.state

    // Get pastedData in an array of max size (num of inputs - current position)
    const pastedData = e.clipboardData
      .getData("text/plain")
      .slice(0, numInputs - activeInput)
      .split("")

    // Paste data from focused input onwards
    for (let pos = 0; pos < numInputs; ++pos) {
      if (pos >= activeInput && pastedData.length > 0) {
        inputsValue[pos] = pastedData.shift()
      }
    }

    this.setState({ inputsValue })
    this.getInputsValue()
  }

  handleOnChange = e => {
    const { inputLength } = this.props
    if (this.props.isNumeric && isNaN(e.target.value)) return
    this.changeCodeAtFocus(e.target.value)
    if (e.target.value.length === inputLength) this.focusNextInput()
  }

  isCurrentEmpty = () => {
    const { activeInput, inputsValue } = this.state
    return !inputsValue[activeInput]
  }

  handleOnKeyDown = e => {
    switch (e.keyCode) {
      case keyboard.BACKSPACE:
        e.preventDefault()
        if (this.isCurrentEmpty()) this.focusPrevInput()
        this.removeOneCharAtFocus()
        break
      case keyboard.DELETE:
        e.preventDefault()
        this.removeOneCharAtFocus()
        break
      case keyboard.LEFT_ARROW:
        e.preventDefault()
        this.focusPrevInput()
        break
      case keyboard.RIGHT_ARROW:
        e.preventDefault()
        this.focusNextInput()
        break
      default:
        break
    }
  }

  getRestInputProps = i => {
    const { placeholder: _, ...restInputProps } =
      this.props.inputPropsMap[i] || {}
    return restInputProps
  }

  getInputPlaceholder = i => {
    const { inputPropsMap, placeholder } = this.props
    const { hidePlaceholder } = this.state
    if (!hidePlaceholder[i] && inputPropsMap[i])
      return inputPropsMap[i].placeholder
    if (!hidePlaceholder[i] && placeholder) return placeholder
    return ""
  }

  renderInputs = () => {
    const { activeInput, inputsValue } = this.state
    const {
      numInputs,
      inputStyle,
      focusStyle,
      valueEnteredStyle,
      separator,
      isDisabled,
      disabledStyle,
      error,
      errorStyle,
      shouldAutoFocus,
      groupSeparatorPositions,
      groupSeparator,
      isNumeric,
      inputClassName,
      inputLength,
    } = this.props
    const inputs = []

    for (let i = 0; i < numInputs; i++) {
      inputs.push(
        <React.Fragment key={i}>
          <SingleInput
            focus={activeInput === i}
            value={inputsValue && inputsValue[i]}
            onChange={this.handleOnChange}
            onKeyDown={this.handleOnKeyDown}
            onPaste={this.handleOnPaste}
            onFocus={() => {
              this.setState({
                activeInput: i,
                hidePlaceholder: { [i]: true },
                // inputsValue: inputsValue.map((value, index) =>
                //   index === i ? "" : value
                // )
              })
              // e.target.select();
            }}
            onBlur={() => {
              this.setState({
                activeInput: -1,
                hidePlaceholder: { [i]: false },
              })
            }}
            separator={separator}
            inputStyle={inputStyle}
            focusStyle={focusStyle}
            valueEnteredStyle={valueEnteredStyle}
            isLastChild={i === numInputs - 1}
            isDisabled={isDisabled}
            disabledStyle={disabledStyle}
            error={error}
            errorStyle={errorStyle}
            shouldAutoFocus={shouldAutoFocus}
            placeholder={this.getInputPlaceholder(i)}
            type={isNumeric ? "tel" : ""}
            className={inputClassName}
            inputLength={inputLength}
            {...this.getRestInputProps(i)}
          />
          {groupSeparatorPositions.includes(i) && groupSeparator}
        </React.Fragment>
      )
    }
    return inputs
  }

  render() {
    const { containerStyle, errorText, error } = this.props
    return (
      <div>
        <div
          style={Object.assign(
            { display: "flex" },
            isObject(containerStyle) && containerStyle
          )}
          className={!isObject(containerStyle) ? containerStyle : ""}
        >
          {this.renderInputs()}
        </div>
        {error && errorText ? errorText : null}
      </div>
    )
  }
}

MaskedInput.defaultProps = {
  isDisabled: false,
  shouldAutoFocus: false,
  inputPropsMap: {},
  groupSeparatorPositions: [],
  groupSeparator: "",
  separator: <span>&nbsp;</span>,
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
  placeholder: "",
}

MaskedInput.propTypes = {
  numInputs: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  shouldAutoFocus: PropTypes.bool,
  inputPropsMap: PropTypes.shape({}),
  groupSeparatorPositions: PropTypes.arrayOf(PropTypes.number),
  groupSeparator: PropTypes.node,
  separator: PropTypes.node,
  defaultValues: PropTypes.arrayOf(PropTypes.string),
  isNumeric: PropTypes.bool,
  inputLength: PropTypes.number,
  inputClassName: PropTypes.string,
  inputStyle: PropTypes.shape({}),
  containerStyle: PropTypes.shape({}),
  errorText: PropTypes.node,
  error: PropTypes.bool,
  errorStyle: PropTypes.shape({}),
  focusStyle: PropTypes.shape({}),
  valueEnteredStyle: PropTypes.shape({}),
  disabledStyle: PropTypes.shape({}),
  placeholder: PropTypes.string,
}

export default MaskedInput
