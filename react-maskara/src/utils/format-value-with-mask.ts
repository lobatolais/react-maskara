const defaultFormatChars = {
  '9': /[0-9]/,
  a: /[A-Za-z]/,
  '*': /[A-Za-z0-9]/,
} as const

export const formatValueWithMask = ({
  mask,
  value,
  cursorPosition,
}: {
  mask: string
  value: string
  cursorPosition: number
}) => {
  if (value.length > mask.length) {
    throw Error('Input value cannot be longer than mask')
  }

  let maskedValue = ''
  let maskIndex = 0
  let valueIndex = 0
  let newCursorPosition = cursorPosition

  while (maskIndex < mask.length && valueIndex < value.length) {
    const maskChar = mask[maskIndex]
    const valueChar = value[valueIndex]
    const formatChar =
      defaultFormatChars[maskChar as keyof typeof defaultFormatChars]

    if (formatChar) {
      if (valueChar && formatChar.test(valueChar)) {
        maskedValue += valueChar
        valueIndex++
      } else {
        if (valueIndex < cursorPosition) newCursorPosition--
        valueIndex++
        continue
      }
    } else {
      maskedValue += maskChar
      if (valueIndex < cursorPosition) newCursorPosition++
    }

    maskIndex++
  }

  return { maskedValue, newCursorPosition }
}
