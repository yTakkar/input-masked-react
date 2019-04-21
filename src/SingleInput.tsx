import React from 'react'
import { isObject } from './helpers'
import { ISingleInputProps } from './types'

class SingleInput extends React.PureComponent<ISingleInputProps> {
  private input: any

  constructor(props: ISingleInputProps) {
    super(props)
    this.input = undefined
  }

  // public componentDidMount() {
  //   const { focus, shouldAutoFocus } = this.props
  //   if (this.input && focus && shouldAutoFocus) this.input.focus()
  // }

  public componentDidUpdate(prevProps: ISingleInputProps) {
    const { input, props } = this
    const { focus } = props

    if (prevProps.focus !== focus && (input && focus)) {
      input.focus()
      // input.select()
    }
  }

  private handleRef = (input: HTMLInputElement) => {
    this.input = input
  }

  public render() {
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
      value,
      style,
      ...rest
    } = this.props

    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          style={Object.assign(
            isObject(style) ? style : {},
            { width: '1em', textAlign: 'center' },
            inputStyle,
            value && isObject(valueEnteredStyle) && valueEnteredStyle,
            focus && isObject(focusStyle) && focusStyle,
            isDisabled && isObject(disabledStyle) && disabledStyle,
            error && isObject(errorStyle) && errorStyle
          )}
          maxLength={1}
          ref={this.handleRef}
          disabled={isDisabled}
          value={value ? value : ''}
          autoComplete='off'
          {...rest}
        />
        {!isLastChild && separator}
      </div>
    )
  }
}

export default SingleInput
