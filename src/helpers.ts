export const isObject = (obj: object | undefined) => typeof obj === 'object'

export const keyboard = {
  BACKSPACE: 8,
  DELETE: 46,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39,
}

export const updateArrayByIndex = (array: any[]) => (index: number, value: any): any[] => {
  return Object.assign([], array, { [index]: value })
}
