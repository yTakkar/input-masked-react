import React, { CSSProperties, ReactNode } from 'react'

interface ICommonProps {
  error?: boolean
  errorStyle?: CSSProperties
  focusStyle?: CSSProperties
  valueEnteredStyle?: CSSProperties
  isDisabled?: boolean
  disabledStyle?: CSSProperties
  separator?: React.ReactNode
  inputStyle?: CSSProperties
}

export interface IMaskedInputProps extends ICommonProps {
  defaultValues?: string[]
  onChange: (v: string) => void
  numInputs?: number
  isNumeric?: boolean
  placeholder?: string
  inputClassName?: string
  disabledStyle?: CSSProperties
  inputPropsMap?: {
    [key: number]: Partial<HTMLInputElement>
  }
  groupSeparatorPositions?: number[]
  groupSeparator?: ReactNode
  containerStyle?: CSSProperties
  errorText?: string
}

export interface ISPlaceholder {
  [key: number]: boolean
}

export interface ISingleInputProps extends ICommonProps {
  isLastChild: boolean
  focus: any
  value: string
  style: CSSProperties
}
