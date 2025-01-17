import "client-only"

import {
  type ChangeEvent,
  useImperativeHandle,
  useRef,
  type ComponentPropsWithRef,
} from "react"
import { formatValueWithMask } from "./utils/format-value-with-mask.js"
import { type MaskedInputProps } from "./types.js"

export const MaskedInput = ({
  mask,
  ...props
}: MaskedInputProps & ComponentPropsWithRef<"input">) => {
  const { ref: forwardedRef, onChange } = props

  const inputRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(forwardedRef, () => inputRef.current as HTMLInputElement)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, selectionStart } = event.target
    const cursorPosition = selectionStart ?? 0
    const { maskedValue, newCursorPosition } = formatValueWithMask({
      mask,
      value,
      cursorPosition,
    })

    if (inputRef.current) {
      inputRef.current.value = maskedValue
      inputRef.current.setSelectionRange(newCursorPosition, newCursorPosition)
    }

    onChange?.(event)
  }

  return (
    <input
      {...props}
      ref={inputRef}
      onChange={handleChange}
      maxLength={mask.length}
    />
  )
}
