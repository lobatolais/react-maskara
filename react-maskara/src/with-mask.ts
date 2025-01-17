import { type RefCallback } from "react"
import { type WithMaskOptions } from "./types.js"
import { formatValueWithMask } from "./utils/format-value-with-mask.js"

export function withMask<
  T extends {
    ref?: RefCallback<HTMLInputElement>
  }
>(el: T, options: WithMaskOptions): T {
  const setNewRef: RefCallback<HTMLInputElement> = (node) => {
    if (node !== null) {
      node.setAttribute("maxLength", options.mask.length.toString())

      const input = (e: Event) => {
        const { value, selectionStart } = e.target as HTMLInputElement
        const cursorPosition = selectionStart ?? 0

        const { maskedValue, newCursorPosition } = formatValueWithMask({
          mask: options.mask,
          value,
          cursorPosition,
        })

        node.value = maskedValue
        node.setSelectionRange(newCursorPosition, newCursorPosition)
      }

      node.addEventListener("input", input)

      el.ref?.(node)

      return () => {
        node.removeEventListener("input", input)
      }
    }
  }

  return {
    ...el,
    ref: setNewRef,
  } as T
}
