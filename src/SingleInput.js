import React from "react"
import PropTypes from "prop-types"
import { isObject } from "./helpers"

class SingleInput extends React.PureComponent {
  componentDidMount() {
    // const { focus, shouldAutoFocus } = this.props
    // if (this.input && focus && shouldAutoFocus) this.input.focus();
  }

  componentDidUpdate(prevProps) {
    const {
      input,
      props: { focus },
    } = this
    if (prevProps.focus !== focus && (input && focus)) {
      input.focus()
      // input.select();
    }
  }

  getClasses = (...classes) =>
    classes.filter(c => !isObject(c) && c !== false).join(" ")

  render() {
    const {
      separator,
      isLastChild,
      inputStyle,
      focus,
      isDisabled,
      error,
      errorStyle,
      focusStyle,
      valueEnteredStyle,
      disabledStyle,
      shouldAutoFocus,
      value,
      inputLength,
      style,
      ...rest
    } = this.props

    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          style={Object.assign(
            { width: "1em", textAlign: "center" },
            inputStyle,
            style,
            value && valueEnteredStyle,
            focus && focusStyle,
            isDisabled && disabledStyle,
            error && errorStyle
          )}
          maxLength={inputLength}
          ref={input => {
            this.input = input
          }}
          disabled={isDisabled}
          value={value || ""}
          autoComplete="off"
          {...rest}
        />
        {!isLastChild && separator}
      </div>
    )
  }
}

SingleInput.defaultProps = {
  value: "",
  style: {},
}

SingleInput.propTypes = {
  focus: PropTypes.bool.isRequired,
  separator: PropTypes.node.isRequired,
  isLastChild: PropTypes.bool.isRequired,
  inputStyle: PropTypes.shape({}).isRequired,
  isDisabled: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  errorStyle: PropTypes.shape({}).isRequired,
  focusStyle: PropTypes.shape({}).isRequired,
  valueEnteredStyle: PropTypes.shape({}).isRequired,
  disabledStyle: PropTypes.shape({}).isRequired,
  shouldAutoFocus: PropTypes.bool.isRequired,
  value: PropTypes.string,
  inputLength: PropTypes.number.isRequired,
  style: PropTypes.shape({}),
}

export default SingleInput
