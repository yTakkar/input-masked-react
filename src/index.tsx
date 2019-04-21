import React, { ClipboardEvent, FC, KeyboardEvent, useState } from 'react'
import { keyboard, updateArrayByIndex } from './helpers'
import SingleInput from './SingleInput'
import { IMaskedInputProps, ISPlaceholder } from './types'

const MaskedInput: FC<IMaskedInputProps> = props => {
  const {
    containerStyle,
    error,
    errorText,
    numInputs,
    inputStyle,
    focusStyle,
    valueEnteredStyle,
    separator,
    isDisabled,
    disabledStyle,
    errorStyle,
    groupSeparatorPositions,
    groupSeparator,
    isNumeric,
    inputClassName,
    inputPropsMap,
    placeholder,
    onChange,
    defaultValues,
  } = props

  const [activeInput, setActiveInput] = useState<number>(0)
  const [inputsValue, setInputsValue] = useState<string[]>(defaultValues)
  const [hidePlaceholder, setHidePlaceholder] = useState<ISPlaceholder>({})

  const getInputsValue = () => onChange(inputsValue.join(''))

  const updateInputsValue = updateArrayByIndex(inputsValue)

  // Focus on input by index
  const focusInput = (input: number) => {
    const updatedActiveInput = Math.max(Math.min(numInputs - 1, input), 0)
    // if (inputsValue[activeInput + 1]) return;
    setActiveInput(updatedActiveInput)
  }

  // Focus on next input
  const focusNextInput = () => focusInput(activeInput + 1)

  // Focus on previous input
  const focusPrevInput = () => focusInput(activeInput - 1)

  // Change inputsValue value at focused input
  const changeCodeAtFocus = (value: string) => {
    setInputsValue(updateInputsValue(activeInput, value))
    getInputsValue()
  }

  // Handle pasted inputsValue
  const handleOnPaste = (e: ClipboardEvent) => {
    e.preventDefault()

    // Get pastedData in an array of max size (num of inputs - current position)
    const pastedData = e.clipboardData
      .getData('text/plain')
      .slice(0, numInputs - activeInput)
      .split('')

    // Paste data from focused input onwards
    for (let pos = 0; pos < numInputs; ++pos) {
      if (pos >= activeInput && pastedData.length > 0) {
        setInputsValue(updateInputsValue(pos, pastedData.shift()))
      }
    }

    getInputsValue()
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNumeric && isNaN(e.target.value as any)) return
    changeCodeAtFocus(e.target.value)
    focusNextInput()
  }

  const isCurrentEmpty = () => !inputsValue[activeInput]

  const handleOnKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
    switch (e.keyCode) {
      case keyboard.BACKSPACE:
        e.preventDefault()
        if (isCurrentEmpty()) focusPrevInput()
        changeCodeAtFocus('')
        break
      case keyboard.DELETE:
        e.preventDefault()
        changeCodeAtFocus('')
        break
      case keyboard.LEFT_ARROW:
        e.preventDefault()
        focusPrevInput()
        break
      case keyboard.RIGHT_ARROW:
        e.preventDefault()
        focusNextInput()
        break
      default:
        break
    }
  }

  const handleOnFocus = (i: number) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setActiveInput(i)
    setHidePlaceholder({ ...hidePlaceholder, [i]: true })
    // inputsValue: inputsValue.map((value, index) =>
    //   index === i ? "" : value
    // )
    // e.target.select();
  }

  const handleOnBlur = (i: number) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setActiveInput(-1)
    setHidePlaceholder({ ...hidePlaceholder, [i]: false })
  }

  const getRestInputProps = (i: number) => {
    const { placeholder: _, ...restInputProps } = inputPropsMap[i] || {}
    return restInputProps
  }

  const getInputPlaceholder = (i: number) => {
    if (!hidePlaceholder[i] && inputPropsMap[i]) {
      return inputPropsMap[i].placeholder
    }
    if (!hidePlaceholder[i] && placeholder) {
      return placeholder
    }
    return ''
  }

  const renderInputs = () => {
    const inputs = []

    for (let i = 0; i < numInputs; i++) {
      inputs.push(
        <React.Fragment key={i}>
          <SingleInput
            focus={activeInput === i}
            value={inputsValue && inputsValue[i]}
            onChange={handleOnChange}
            onKeyDown={handleOnKeyDown}
            onPaste={handleOnPaste}
            onFocus={handleOnFocus(i)}
            onBlur={handleOnBlur(i)}
            separator={separator}
            inputStyle={inputStyle}
            focusStyle={focusStyle}
            valueEnteredStyle={valueEnteredStyle}
            isLastChild={i === numInputs - 1}
            isDisabled={isDisabled}
            disabledStyle={disabledStyle}
            error={error}
            errorStyle={errorStyle}
            placeholder={getInputPlaceholder(i)}
            type={isNumeric ? 'tel' : ''}
            className={inputClassName}
            {...getRestInputProps(i)}
          />
          {groupSeparatorPositions.includes(i) && groupSeparator}
        </React.Fragment>
      )
    }
    return inputs
  }

  return (
    <div>
      <div style={{ display: 'flex', ...containerStyle }}>{renderInputs()}</div>
      {error && errorText ? errorText : null}
    </div>
  )
}

MaskedInput.defaultProps = {
  numInputs: 4,
  onChange: () => null,
  isDisabled: false,
  inputPropsMap: {},
  groupSeparatorPositions: [],
  groupSeparator: <span />,
  separator: <span>&nbsp;</span>,
  defaultValues: [],
  isNumeric: false,
}

export default MaskedInput
