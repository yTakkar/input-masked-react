import React from 'react';
import { isObject } from './helpers';

class SingleInput extends React.PureComponent {
  componentDidMount() {
    const { focus, shouldAutoFocus } = this.props;
    // if (this.input && focus && shouldAutoFocus) this.input.focus();
  }

  componentDidUpdate(prevProps) {
    const {
      input,
      props: { focus },
    } = this;
    if (prevProps.focus !== focus && (input && focus)) {
      input.focus();
      // input.select();
    }
  }

  getClasses = (...classes) =>
    classes.filter(c => !isObject(c) && c !== false).join(' ');

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
      style,
      ...rest
    } = this.props;

    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          style={Object.assign(
            isObject(style) && style,
            { width: '1em', textAlign: 'center' },
            inputStyle,
            value && isObject(valueEnteredStyle) && valueEnteredStyle,
            focus && isObject(focusStyle) && focusStyle,
            isDisabled && isObject(disabledStyle) && disabledStyle,
            error && isObject(errorStyle) && errorStyle
          )}
          maxLength="1"
          ref={input => {
            this.input = input;
          }}
          disabled={isDisabled}
          value={value ? value : ''}
          autoComplete="off"
          {...rest}
        />
        {!isLastChild && separator}
      </div>
    );
  }
}

export default SingleInput;
