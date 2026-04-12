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
  // Literals are buffered and only flushed when a valid character follows,
  // so leading/trailing literals never appear in isolation.
  let pendingLiterals = ''
  let pendingCursorAdjust = 0

  while (maskIndex < mask.length && valueIndex < value.length) {
    const maskChar = mask[maskIndex]
    const valueChar = value[valueIndex]
    const formatChar =
      defaultFormatChars[maskChar as keyof typeof defaultFormatChars]

    if (formatChar) {
      if (valueChar && formatChar.test(valueChar)) {
        maskedValue += pendingLiterals
        newCursorPosition += pendingCursorAdjust
        pendingLiterals = ''
        pendingCursorAdjust = 0
        maskedValue += valueChar
        valueIndex++
      } else {
        if (valueIndex < cursorPosition) newCursorPosition--
        valueIndex++
        continue
      }
    } else {
      pendingLiterals += maskChar
      if (valueIndex < cursorPosition) pendingCursorAdjust++
    }

    maskIndex++
  }

  return { maskedValue, newCursorPosition }
}
